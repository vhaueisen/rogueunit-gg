<script>
	export let href = '/';
	export let blank = false;
	export let secondary = false;
	export let btnClass = '';
	export let type = 'button';
</script>

<a
	{href}
	target={blank ? '_blank' : ''}
	class:secondary
	class:btnClass
	{type}
	data-sveltekit-preload-data
>
	<slot />
</a>

<style>
	a,
	a:visited {
		display: inline-block;
		padding: 1em 2em;
		margin: 0;
		background-color: var(--tertiary-color);
		color: var(--quaternary-color);
		text-decoration: none;
		font-weight: bold;
		transition: background-color 0.3s ease;
		font-family: Overpass;
		font-size: 18px;
		font-weight: 400;
		text-align: center;
	}

	a:hover {
		background-color: var(--primary-color);
	}

	a.secondary {
		background-color: var(--secondary-color);
	}
</style>
