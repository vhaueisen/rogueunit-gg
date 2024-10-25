<script lang="ts">
	import Button from './../components/button.svelte';
	import { page } from '$app/stores';
	import Footer from '../components/footer.svelte';
</script>

<div class="content">
	<h1>{$page.status}</h1>
	<img src="/icons/error.png" alt="Error" />
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
		color: var(--quaternary-color);
	}

	h1{
		opacity: 0.3;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: center;
		height: calc(100% - 304px);
		min-height: fit-content;
		margin: 4em 0;
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
