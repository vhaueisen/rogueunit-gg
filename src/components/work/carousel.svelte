<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let currentSlide = 1;
	let previousIndex = 0;
	let interval: any;

	let slides = [
		{
			title: 'LOUD',
			subtitle: 'Liga Loud: Lendas do Futebol',
			image: '/images/loud-league.png',
			alt: 'Thumbnail da Liga Loud: Lendas do Futebol.',
			link: 'https://www.loud.gg/liga-loud/',
			branded: true
		},
		{
			title: 'SPORTV',
			subtitle: 'SporTV Land',
			image: '/images/sportv-land.jpg',
			alt: 'Thumbnail do SporTV Land.',
			link: 'https://www.sportv.com/land',
			branded: true
		},
		{
			title: 'ROGUE UNIT',
			subtitle: 'Hyperlight Wings',
			image: '/images/hyperlight-wings.png',
			alt: 'Thumbnail do Hyperlight Wings.',
			link: 'https://www.rogueunit.com/hyperlight-wings'
		}
	];

	function reset() {
		clearInterval(interval);
		interval = setInterval(() => {
			nextSlide();
		}, 5000);
	}

	onMount(() => {
		reset();

		return () => clearInterval(interval);
	});

	function nextSlide() {
		previousIndex = currentSlide;
		currentSlide = (currentSlide + 1) % slides.length;
		reset();
	}

	function previousSlide() {
		previousIndex = currentSlide;
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		reset();
	}
</script>

<div class="container">
	<div class="experience-title"><h6>Experiências imersivas</h6></div>
	<div class="carousel">
		<div class="content">
			<button class="navigation left" on:click={previousSlide}>&lt;</button>
			{#each slides as slide, index}
				{#if currentSlide === index}
					<div
						class="slide"
						transition:fly={{ x: currentSlide > previousIndex ? 500 : -500, duration: 500 }}
						style="background-image: url({slide.image});"
					>
						<div class="experience-type" class:branded={slide.branded}>
							{slide.branded ? 'Experiência de Marca' : 'Experiência Proprietária'}
						</div>
						<div class="slide-content">
							<div class="title">{slide.title}</div>
							<div class="subtitle"><a href={slide.link} target="_blank">{slide.subtitle}</a></div>
						</div>
					</div>
				{/if}
			{/each}

			<button class="navigation right" on:click={nextSlide}>&gt;</button>
		</div>
	</div>
	<div class="slide-indicators">
		{#each slides as _, index}
			<div class="indicator {currentSlide === index ? 'active' : ''}"></div>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		background: #222;
		position: relative;
		padding-top: 3em;
		padding-bottom: 3em;
	}

	.carousel {
		display: flex;
		align-items: center;
		border-radius: 10px;
		height: 450px;
		overflow: hidden;
	}

	.slide {
		position: absolute;
		width: 100%;
		height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #222;
		border-radius: 10px;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
		background-size: cover;
		background-position: center;
	}

	.navigation {
		background: transparent;
		color: white;
		font-size: 24pt;
		border: none;
		padding: 1rem;
		cursor: pointer;
		transition: background-color 0.3s;
		z-index: 2;
	}

	.navigation.left {
		margin-left: 8px;
	}

	.navigation.right {
		margin-right: 8px;
	}

	.slide-indicators {
		position: absolute;
		bottom: 2em;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.5rem;
	}

	.indicator {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: #ccc;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.indicator.active {
		background-color: #ff0099;
	}

	.indicator:hover {
		background-color: #000;
	}

	.experience-type {
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--primary-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 0 5px 0 5px;
		padding: 8px 24px 8px 24px;
		font-size: 1rem;
	}

	.experience-type.branded {
		background-color: var(--secondary-color);
	}

	.experience-title {
		background-color: var(--tertiary-color);
		color: white;
		padding: 1em;
		border-radius: 5px;
		font-weight: bold;
		width: fit-content;
		z-index: 5;
		position: absolute;
		top: -30px;
		left: 72px;
	}

	.experience-title h6 {
		margin: 0;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		width: 100%;
		max-width: 800px;
		margin: auto;
		height: 100%;
	}

	.slide-content {
		color: white;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		text-align: left;
		background: linear-gradient(0deg, #000000 10%, rgba(0, 0, 0, 0) 70%);
	}

	.title {
		font-size: 1.25rem;
		font-weight: bold;
		text-align: left;
		margin-left: 32px;
		font-family: Overpass;
		font-size: 16px;
		font-weight: 700;
	}

	.subtitle {
		font-size: 1rem;
		margin-top: 0.25rem;
		margin: 0.5em 0 2em 0;
		margin-left: 32px;
		font-family: Overpass;
		font-size: 24px;
		font-weight: 700;
		text-align: left;
	}

	.subtitle a {
		color: white;
		text-decoration: none;
	}

	.subtitle a:hover {
		text-decoration: underline;
	}
</style>
