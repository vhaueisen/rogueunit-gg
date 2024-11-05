<script lang="ts">
	import { fly } from 'svelte/transition';
	interface Slide {
		image: string;
		alt: string;
		quote: string;
		description: string;
		link: string;
		linkText: string;
	}

	export let Slide: Slide;
	export let targetIn: () => { x: number; duration: number };
	export let targetOut: () => { x: number; duration: number };
</script>

<div class="slide" in:fly={targetIn()} out:fly={targetOut()}>
	<img src={Slide.image} alt={Slide.alt} />
	<div class="text">
		<div class="quote">"{Slide.quote}"</div>
		<div class="description">{Slide.description}</div>
		<div class="link">
			<a href={Slide.link} class="button" target="_blank">{Slide.linkText}</a>
		</div>
	</div>
</div>

<style>
	.slide {
		position: absolute;
		width: calc(100% - 2em);
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
		gap: 1em;
		height: 70%;
		overflow: hidden;
	}

	img {
		width: 30%;
		max-width: 30%;
		aspect-ratio: 1;
		border-radius: 8px;
		object-fit: cover;
		margin-left: 2em;
	}

	.text {
		display: flex;
		flex-direction: column;
		margin-right: 2em;
		width: 100%;
		flex-grow: 1;
		padding: 1em;
	}

	.quote {
		font-size: 1.2rem;
		font-family: 'Rowdies', sans-serif;
		font-weight: 400;
		text-align: center;
	}

	.description {
		margin-top: 1em;
		text-overflow: clip;
		max-height: 100px;
		overflow: hidden;
	}

	.link {
		margin-top: 1em;
		flex-grow: 1;
		display: flex;
		padding-bottom: 1em;
	}

	.button {
		background-color: var(--secondary-color);
		color: var(--quaternary-color);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		text-decoration: none;
		align-self: flex-end !important;
	}

	.quote {
		text-align: left;
	}

	.text {
		align-items: flex-start;
		gap: 1em;
	}

	.button {
		align-self: flex-start;
	}

	.text {
		justify-content: center;
		padding: 1rem;
	}

	@media screen and (max-width: 768px) {
		.slide {
			flex-direction: column;
			height: 90%;
			width: 100%;
			margin: 0;
		}

		img {
			display: none;
		}

		.text {
			margin: 0;
			gap: 0;
		}

		.description {
			padding: 1em 4em;
			max-height: 38px;
			margin: 0;
		}

		.quote {
			font-size: 1rem;
			padding: 1em;
		}

		.link {
			padding: 1em;
		}
	}
</style>
