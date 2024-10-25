<script>
	import Button from '../button.svelte';
</script>

<div class="container">
	<div class="speech-bubble">
		<h4>Faça parte do nosso squad!</h4>
		<div class="btn-row">
			<Button href="/contact" btnClass="btn">Enviar e-mail</Button>
		</div>
	</div>
	<div class="img-container">
		<img src="/images/invite-background.png" alt="Convite" />
	</div>
</div>

<style>
	.container {
		margin-top: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		position: relative;
	}

	h4 {
		text-align: center;
		margin: 1rem 0;
	}

	.speech-bubble {
		position: relative;
		background: var(--secondary-color);
		color: white;
		font-weight: bold;
		width: 80%;
		max-width: 600px;
		padding: 1rem;
		border-radius: 5px;
		margin-top: 2rem;
		margin-bottom: 3rem;
	}

	.speech-bubble::after {
		content: '';
		position: absolute;
		bottom: -20px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-top: 20px solid var(--secondary-color);
		border-right: 20px solid transparent;
		border-left: 20px solid transparent;
	}

	.img-container {
		width: 100%;
		max-width: 1200px;
		display: flex;
	}

	img {
		width: 100%;
		height: auto;
	}

	.btn-row {
		margin: 1rem 4em;
		text-align: right;
	}

	@media screen and (min-width: 768px) {
		.container {
			flex-direction: row;
			justify-content: end;
			align-items: flex-start;
		}

		.speech-bubble {
			width: 50%;
			margin-right: 2rem;
			margin-top: 5em;
		}

		.speech-bubble::after {
			top: 50%;
			bottom: auto;
			left: 100%;
			transform: translateY(-50%);
			border-top: 20px solid transparent;
			border-bottom: 20px solid transparent;
			border-left: 20px solid var(--secondary-color);
			border-right: none;
		}

		.img-container {
			width: 50%;
			margin-top: 0;
		}
	}
</style>
