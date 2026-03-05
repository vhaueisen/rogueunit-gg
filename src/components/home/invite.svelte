<script>
	import Button from '../button.svelte';
	import { base } from '$app/paths';
</script>

<div class="container">
	<div class="speech-bubble">
		<h4>Faça parte do nosso squad!</h4>
		<div class="btn-row">
			<Button href="{base}/contact" btnClass="btn">Enviar e-mail</Button>
		</div>
	</div>
	<div class="img-container">
		<img src="{base}/images/invite-background.png" alt="Convite" />
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
		bottom: -19px;
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
		text-align: center;
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

		.btn-row {
			margin: 1rem 4em;
		}

		.speech-bubble::after {
			top: 100%;
			bottom: auto;
			left: 8%;
			transform: translateY(-50%);
			border-top: 20px solid transparent;
			border-bottom: 40px solid transparent;
			border-right: 60px solid var(--secondary-color);
		}

		.img-container {
			width: 50%;
			margin-top: 0;
		}

		.btn-row {
			position: absolute;
			right: 0;
		}

		.speech-bubble {
			padding-bottom: 3em;
		}
	}
</style>
