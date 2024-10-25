<script>
	import { enhance } from '$app/forms';
	import Footer from '../../components/footer.svelte';
	import ScrollIndicator from '../../components/scroll-indicator.svelte';
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div class="contact-title">
	<h4>Como podemos te ajudar hoje?</h4>
	<!-- <ScrollIndicator /> -->
</div>

{#if form?.valid !== true}
	<form
		method="POST"
		action="?/contact"
		use:enhance={() => {
			return async ({ update }) => {
				update({ reset: false });
			};
		}}
	>
		<div>
			<div>
				<label for="name">Nome:</label>
				<input type="text" name="name" placeholder="Fulano da Silva" required />
			</div>
			<div>
				<label for="email">E-mail:</label>
				<input type="email" name="email" placeholder="example@example.com" required />
			</div>
		</div>

		<div>
			<label for="message">Mensagem:</label>
			<textarea name="message" placeholder="Escreva sua mensagem aqui :)" rows="8" required
			></textarea>
			<button>Enviar</button>
		</div>
	</form>
{/if}

{#if form?.valid === true}
	<div class="speech-bubble">
		Seu contato foi enviado e logo será tratado por nossa equipe!<br />:)
	</div>
{/if}
{#if form?.valid === false}<p class="error">{form.text}</p>{/if}

<style>
	.contact-title {
		font-size: 3rem;
		font-weight: bold;
		text-align: center;
		height: 600px;
		background: url('images/contact-background.jpg') no-repeat center 70% / 100%;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.contact-title h4 {
		margin: 0;
		color: white;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 2em;
		width: 100%;
		max-width: 900px;
		text-align: center;
		margin: 2em;
	}

	.error {
		text-align: center;
		font-size: large;
		margin: auto;
		width: 100%;
		max-width: 1280px;
		padding-bottom: 2em;
		color: red;
	}

	button {
		display: inline-block;
		padding: 0.8rem 2rem;
		background-color: var(--tertiary-color);
		color: var(--quaternary-color);
		text-decoration: none;
		font-weight: bold;
		border-radius: 5px;
		transition: background-color 0.3s ease;
		font-family: Overpass;
		font-size: 18px;
		font-weight: 400;
		text-align: center;
		border: none;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10%;
		align-items: flex-start;
		justify-content: center;
		margin: auto;
		max-width: 1280px;
		padding: 2em;
	}

	label {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}

	input,
	textarea {
		width: 100%;
		padding: 15px;
		font-size: 1.1rem;
		border-radius: 5px;
		outline: none;
		background-color: #1f1f1f;
		border: 1px solid #4d4d4d;
		margin: 1em 0em 2em 0em;
		color: var(--quaternary-color);
	}

	input:focus,
	textarea:focus {
		border-color: var(--tertiary-color);
		box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
	}

	form div {
		width: 90%;
	}

	form div div {
		width: 100%;
	}

	input::placeholder,
	textarea::placeholder {
		color: #888;
	}

	.speech-bubble {
		position: relative;
		background: #292929;
		color: white;
		font-weight: bold;
		width: 80%;
		max-width: 400px;
		padding: 1rem;
		border-radius: 5px 5px 5px 0px;
		margin: 5em 0;
		text-align: center;
		align-self: center;
		justify-self: center;
		font-size: 24px;
	}

	.speech-bubble::after {
		content: '';
		position: absolute;
		bottom: -20px;
		left: 0;
		width: 0;
		height: 0;
		border-top: 20px solid #292929;
		border-right: 20px solid transparent;
	}

	@media screen and (min-width: 768px) {
		.speech-bubble {
			width: 50%;
			margin-right: 2rem;
			margin-top: 5em;
		}
	}

	@media screen and (min-width: 600px) {
		form {
			flex-direction: row;
		}

		.error {
			text-align: left;
		}
	}
</style>
