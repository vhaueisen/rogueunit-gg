<script lang="ts">
	import Button from './../components/button.svelte';
	import { page } from '$app/stores';
</script>

<div class="content">
	<h1>{$page.status}</h1>
	<h3>Ooops...</h3>
	<p>Parece que você está perdido.</p>

	<div class="btn-row">
		<Button href="javascript:history.back()" secondary>Voltar</Button>
		<div class="spacer" />
		<Button href="/">Início</Button>
	</div>
</div>

<style>
	h1,
	h3 {
		line-height: 0.2;
	}

	.content {
		margin-top: 4em;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: center;
	}

	.btn-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		z-index: 9;
	}

	.spacer {
		width: 2em;
	}
</style>
