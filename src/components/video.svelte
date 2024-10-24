<!-- Video component -->
<script lang="ts">
	export let src: string = '';
</script>

<div class="video">
	<iframe
		width="560"
		height="315"
		{src}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</div>

<style>
	.video {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1em;
	}
</style>
