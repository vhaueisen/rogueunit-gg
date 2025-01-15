<script>
	import Button from '../button.svelte';
</script>

<section class="callout-section">
	<div class="callout-content">
		<img src="/images/roblox-characters.png" alt="Roblox Characters" class="callout-image" />
		<p>
			Somos líderes em criar experiências únicas no <a
				href="https://roblox.com"
				class="highlight"
				target="_blank">Roblox</a
			> para marcas que querem se conectar de forma impactante com o público jovem. Transformamos marcas
			em parte ativa do universo de jogos com campanhas, itens e espaços personalizados que atraem e
			fidelizam fãs.
		</p>
		<Button href="/work">SAIBA MAIS</Button>
	</div>
	<div class="trapezoid"></div>
</section>

<style>
	.callout-section {
		padding-top: 3em;
		text-align: center;
		color: white;
		position: relative;
		overflow: hidden;
		max-width: 1280px;
		margin: -1em auto 5em auto;
	}

	.callout-content {
		width: 80%;
		max-width: 600px;
		margin: 0 auto;
		border-radius: 10px;
		position: relative;
		z-index: 1;
	}

	.callout-image {
		width: 100%;
		max-width: 400px;
		margin-bottom: 1rem;
	}

	.callout-content p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--quaternary-color);
		margin-bottom: 2em;
	}

	.highlight {
		color: var(--tertiary-color);
		text-decoration: none;
	}

	.highlight:hover {
		text-decoration: underline;
	}

	.trapezoid {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(
			1.12deg,
			rgba(255, 255, 248, 0.3) -118.68%,
			rgba(255, 255, 248, 0) 91.43%
		);
		clip-path: polygon(0 0, 100% 0, 59.5% 100%, 40.5% 100%);
		z-index: 0;
	}

	p {
		margin: 1em auto;
	}

	@media (max-width: 768px) {
		.callout-image {
			width: 80%;
		}

		.callout-content p {
			font-size: 1rem;
		}

		p {
			max-width: 475px;
		}

		.trapezoid {
			clip-path: polygon(0 0, 100% 0, 73% 100%, 27% 100%);
		}
	}
</style>
