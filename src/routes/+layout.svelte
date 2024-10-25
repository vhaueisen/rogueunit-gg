<script>
	import Navbar from '../components/navbar.svelte';
	import './../css/styles.css';
	import Footer from '../components/footer.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta name="language" content="pt-BR" />
	<meta name="author" content="Rogue Unit" />
	<meta name="geo.region" content="BR-SP" />
	<meta name="geo.placename" content="São Paulo" />
	<meta name="geo.position" content="-23.5672;-46.6881" />
	<meta name="ICBM" content="-23.5672, -46.6881" />
	<link rel="apple-touch-icon" sizes="180x180" href="favicon.png" />
	<link rel="icon" href="favicon.png" type="image/x-icon" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&family=Rowdies:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar />
<slot />

<Footer />
