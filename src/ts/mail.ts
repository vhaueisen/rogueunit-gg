import { ConfidentialClientApplication, type AuthenticationResult } from '@azure/msal-node';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import dotenv from 'dotenv';

const SUBJECT = 'Contato Rogue Unit';
const USER = 'contato@rogueunit.gg';

dotenv.config();

const limiterOptions = {
	points: 3, // 2 points
	duration: 300 // Per 5 minutes
};

const limiter = new RateLimiterMemory(limiterOptions);

const clientId = process.env.MSAL_CLIENT_ID ?? '';
const authority = process.env.MSAL_TENANT_ID ?? '';
const clientSecret = process.env.MSAL_CLIENT_SECRET ?? '';

const config = {
	auth: {
		clientId,
		authority,
		clientSecret
	}
};

const cca = new ConfidentialClientApplication(config);

const mailToRecipients = (address: string) => {
	return [
		{
			emailAddress: {
				address
			}
		}
	];
};

const getMessageBody = (name: string, message: string) => {
	return {
		contentType: 'HTML',
		content: `<h1>Contato Rogue Unit</h1><p>De: ${name}</p><br><p>${message}</p><br><hr/>`
	};
};

const getRequestBody = (name: string, mail: string, message: string) => {
	return JSON.stringify({
		message: {
			subject: SUBJECT,
			toRecipients: mailToRecipients(mail),
			bccRecipients: mailToRecipients(USER),
			bodyPreview: message,
			body: getMessageBody(name, message)
		}
	});
};

const getAccessToken = async () => {
	const result: AuthenticationResult | null = await cca.acquireTokenByClientCredential({
		scopes: ['https://graph.microsoft.com/.default']
	});
	return result?.accessToken;
};

export const sendEmail = async (key: string, name: string, email: string, message: string) => {
	try {
		await limiter.consume(key, 1);
	} catch {
		throw new Error('429 Too Many Requests');
	}

	const accessToken = await getAccessToken();

	if (!accessToken) throw new Error('401 Unauthorized');

	const response = await fetch(`https://graph.microsoft.com/v1.0/users/${USER}/sendMail`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
			ContentType: 'application/json'
		},
		body: getRequestBody(name, email, message)
	});

	if (response.status !== 202) throw new Error(`500 Error sending email`);
};
