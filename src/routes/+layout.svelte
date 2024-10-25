<script>
	import Navbar from '../components/navbar.svelte';
	import './../css/styles.css';
	import Footer from '../components/footer.svelte';
</script>

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

<Navbar />
<slot />

<Footer	/>