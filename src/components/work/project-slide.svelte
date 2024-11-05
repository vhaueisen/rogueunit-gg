<script lang="ts">
	import { fly } from 'svelte/transition';
	interface Slide {
		title: string;
		subtitle: string;
		image: string;
		link: string;
		branded?: boolean;
	}

	export let Slide: Slide;
	export let targetIn: () => { x: number; duration: number };
	export let targetOut: () => { x: number; duration: number };
</script>

<div
	class="slide"
	in:fly={targetIn()}
	out:fly={targetOut()}
	style="background-image: url({Slide.image});"
>
	<div class="experience-type" class:branded={Slide.branded}>
		{Slide.branded ? 'Experiência de Marca' : 'Experiência Proprietária'}
	</div>
	<div class="slide-content">
		<div class="title">{Slide.title}</div>
		<div class="subtitle"><a href={Slide.link} target="_blank">{Slide.subtitle}</a></div>
	</div>
</div>

<style>
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

	.slide {
		position: absolute;
		width: calc(100% - 2em);
		height: 60vw;
		max-height: 420px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #222;
		border-radius: 10px;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
		background-size: cover;
		background-position: center;
		margin-left: 1em;
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
