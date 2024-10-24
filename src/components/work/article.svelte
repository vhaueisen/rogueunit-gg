<script lang="ts">
	import { draw } from 'svelte/transition';
	import { linear } from 'svelte/easing';

	let drawSvg = false;
	let sections = [
		{
			title: 'Integrações de Marca',
			subtitle: 'Title Here',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
			image: '/images/roblox-characters.png',
			alt: 'Alguma legenda aqui'
		},
		{
			title: 'UGC',
			subtitle: 'Definição',
			description:
				'Conhecidos como UGC (do inglês, Conteúdo Gerado pelo Usuário), esses são conteúdos criados e publicados em plataformas online e podem ser usados como ativações para marcas promoverem-se dentro do jogo, fazendo com que a comunidade cresça e adquira itens que representem suas preferências. Imagine camisetas de bandas, times de futebol ou qualquer outro item que ressoe com a identidade da sua marca.',
			image: '/images/roblox-characters.png',
			alt: 'Alguma legenda aqui'
		}
	];

	function actionWhenInViewport(e: Element) {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				drawSvg = true;
				observer.disconnect();
			}
		}, {});
		observer.observe(e);
	}
</script>

<div class="container">
	<div class="zigzag">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 640 1839"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			use:actionWhenInViewport
		>
			{#if drawSvg}
				<path
					transition:draw={{ duration: 5000, easing: linear }}
					d="M323.31 0.961722V116.547H6.36133V907.64H633.66V1667.77H243.629V1839"
					stroke="white"
					stroke-width="7"
					fill="transparent"
					vector-effect="non-scaling-stroke"
				/>
			{/if}
		</svg>
	</div>
	{#each sections as section}
		<div class="section">
			<div class="image-wrapper">
				<img src={section.image} alt={section.alt} class="image" />
			</div>
			<div class="text-wrapper">
				<div class="title">{section.title}</div>
				<div class="subtitle">{section.subtitle}</div>
				<div class="description">{section.description}</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		padding: 2rem;
		color: white;
		font-family: Arial, sans-serif;
		position: relative;
		align-items: center;
		max-width: 1280px;
		margin: auto;
	}

	.section {
		display: flex;
		align-items: center;
		gap: 2rem;
		position: relative;
		width: 80%;
		height: 100%;
		z-index: 2;
		margin: 5em auto;
	}

	.section:nth-child(odd) {
		flex-direction: row-reverse;
	}

	.image-wrapper {
		width: 30%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #111;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.text-wrapper {
		max-width: 600px;
		flex: 1;
		display: flex;
		gap: 1em;
		flex-direction: column;
		justify-content: center;
	}

	.title {
		font-size: 2rem;
		text-align: left;
		font-weight: bold;
		color: var(--quaternary-color);
	}

	.subtitle {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--tertiary-color);
	}

	.description {
		font-size: 1rem;
		line-height: 1.5;
		color: var(--quaternary-color);
	}

	.zigzag {
		position: absolute;
		width: 50%;
		height: 100%;
		opacity: 0.1;
	}

	@media (max-width: 768px) {
		.container {
			padding: 1rem;
		}

		.section, .section:nth-child(odd) {
			flex-direction: column;
			margin: 2em auto;
		}

		.image-wrapper {
			width: 100%;
		}

		.text-wrapper {
			max-width: 100%;
		}

		.zigzag {
			display: none;
		}

		.section {
			margin: 0 auto;
		}
	}
</style>
