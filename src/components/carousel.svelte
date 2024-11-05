<script lang="ts">
	import { onMount } from 'svelte';

	export let Slide: ConstructorOfATypedSvelteComponent;
	export let Content: any[];
	export let Title: string;
	export let Background: boolean = true;

	let currentSlide = 0;
	let dir = 1;
	let interval: any;
	let startX = 0;
	let isDragging = false;

	function nextSlide() {
		dir = 1;
		currentSlide = (currentSlide + 1) % Content.length;
		if (currentSlide === 0) dir = -1;
		reset();
	}

	function previousSlide() {
		dir = -1;
		currentSlide = (currentSlide - 1 + Content.length) % Content.length;
		if (currentSlide === Content.length - 1) dir = 1;
		reset();
	}

	function goToSlide(index: number) {
		dir = index > currentSlide ? 1 : -1;
		currentSlide = index;
		reset();
	}

	function targetIn() {
		return { x: dir * 500, duration: 500 };
	}

	function targetOut() {
		return { x: -dir * 500, duration: 500 };
	}

	function reset() {
		clearInterval(interval);
		interval = setInterval(() => {
			nextSlide();
		}, 5000);
	}

	onMount(() => {
		reset();

		return () => {
			clearInterval(interval);
		};
	});

	function handleMouseDown(event: PointerEvent) {
		startX = event.clientX;
		isDragging = true;
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleMouseMove(event: PointerEvent) {
		if (!isDragging) return;
		const diff = event.clientX - startX;
		if (diff > 100) {
			previousSlide();
			isDragging = false;
		} else if (diff < -100) {
			nextSlide();
			isDragging = false;
		}
	}
</script>

<div
	class="container"
	class:background={Background}
	on:pointerdown={handleMouseDown}
	on:pointerup={handleMouseUp}
	on:pointermove={handleMouseMove}
>
	<div class="experience-title"><h6>{Title}</h6></div>
	<div class="carousel">
		<div class="content">
			<button class="navigation left" on:click={previousSlide}>&lt;</button>
			{#each Content as current, index}
				{#if currentSlide === index}
					<Slide Slide={current} {targetIn} {targetOut} />
				{/if}
			{/each}

			<button class="navigation right" on:click={nextSlide}>&gt;</button>
		</div>
	</div>
	<div class="slide-indicators">
		{#each Content as _, index}
			<button class:active={currentSlide === index} on:click={() => goToSlide(index)}></button>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		position: relative;
		padding-top: 3em;
		padding-bottom: 3em;
		user-select: none;
	}

	.container.background {
		background: url('/images/light-dark-texture.jpg') no-repeat center center / cover;
	}

	.carousel {
		display: flex;
		align-items: center;
		border-radius: 10px;
		height: 70vw;
		max-height: 475px;
		overflow: hidden;
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

	.slide-indicators button {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: #ccc;
		cursor: pointer;
		transition: background-color 0.3s;
		border: none;
		padding: 0;
		margin: 0;
	}

	.slide-indicators button:hover,
	.slide-indicators button.active {
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
</style>
