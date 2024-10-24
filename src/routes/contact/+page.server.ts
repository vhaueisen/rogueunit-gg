import { sendEmail } from '../../ts/mail.js';

const validEmail = (email: string) => {
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

export const actions = {
	contact: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name')?.toString() ?? '';
		const email = data.get('email')?.toString() ?? '';
		const message = data.get('message')?.toString() ?? '';
		const key = event.getClientAddress();

		if (!name) {
			return {
				valid: false,
				text: 'Nome não pode ser vazio'
			};
		}

		if (!email) {
			return {
				valid: false,
				text: 'Email não pode ser vazio'
			};
		}

		if (!message) {
			return {
				valid: false,
				text: 'Mensagem não pode ser vazia'
			};
		}

		if (!validEmail(email)) {
			return {
				valid: false,
				text: 'Email inválido'
			};
		}

		try {
			await sendEmail(key, name, email, message);
			return {
				valid: true,
				text: 'Email enviado com sucesso!'
			};
		} catch (e) {
			return {
				valid: false,
				text: 'Erro ao enviar email'
			};
		}
	}
};
