<script lang="ts">
	export let title: string = '';
</script>

<div class="title">
	<h1 class="animate slide">{title}</h1>
	<slot />
</div>

<style>
	.title {
		text-align: center;
		max-width: 1200px;
		margin: auto;
	}

	.title h1 {
		text-align: center;
	}

	@media (max-width: 768px) {
		.title {
			padding: 0 1em;
		}
	}
</style>
