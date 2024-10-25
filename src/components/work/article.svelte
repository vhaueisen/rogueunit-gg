<script lang="ts">
	import { draw } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { onDestroy } from 'svelte';

	let drawSvg = false;
	let observer: IntersectionObserver;

	let sections = [
		{
			title: 'Integrações de Marca',
			subtitle: 'Engaje uma Nova Geração de Fãs',
			description:
				'A integração de marcas em jogos na Roblox oferece uma oportunidade inovadora para se conectarem com as novas gerações de forma imersiva e interativa. No universo do Roblox, a média diária de engajamento gira em torno de 2,3 horas por usuário e as marcas podem criar ambientes exclusivos, lançar itens virtuais e promover eventos temporários ou permanentes para engajar o público de forma natural. Esse tipo de experiência transforma o branding em algo vivo e personalizável, que acompanha os jogadores durante suas jornadas digitais​.',
			image: '/images/roblox-characters.png',
			alt: 'Alguma legenda aqui'
		},
		{
			title: 'UGC',
			subtitle: 'Impulsione sua Marca com Itens Virtuais',
			description:
				'Integrar UGC ao universo da sua marca no é uma estratégia poderosa para fortalecer laços autênticos com o público jovem. No Roblox, usuários têm a oportunidade de personalizar e criar itens que representam sua individualidade, transformando-se em verdadeiros embaixadores da marca. Ao permitir que os consumidores gerem conteúdo em torno de seus produtos, sua marca se torna uma parte ativa e significativa de suas experiências diárias, impulsionando engajamento e visibilidade de maneira orgânica.',
			image: '/images/roblox-characters.png',
			alt: 'Alguma legenda aqui'
		}
	];

	function actionWhenInViewport(e: Element) {
		observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				drawSvg = true;
				observer.disconnect();
			}
		}, {});
		observer.observe(e);
	}

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
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
	{#each sections as section, index}
		<div class="section" class:odd={index % 2 == 0}>
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
		margin: 3em auto 5.2em auto;
	}

	.section.odd {
		margin-top: 8em;
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

		.section,
		.section:nth-child(odd) {
			flex-direction: column;
			margin: 4em auto;
		}

		.image-wrapper {
			width: 80%;
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

		.section.odd {
			margin-top: 3em;
		}
	}
</style>
