<script>
	import Header from '../components/header.svelte';
	import Callout from '../components/home/callout.svelte';
	import ScrollIndicator from '../components/scroll-indicator.svelte';
	import Carousel from '../components/home/news-carousel.svelte';
	import Invite from '../components/home/invite.svelte';
	import Video from '../components/video.svelte';
</script>

<svelte:head>
	<title>Rogue Unit - Experiências Digitais para Marcas no Roblox</title>
	<meta
		name="description"
		content="A Rogue Unit é especialista em criar experiências digitais imersivas no Roblox para marcas conectarem-se ao público jovem. Conheça nossos projetos de sucesso com LOUD e Sportv, que transformam storytelling e engajamento em resultados."
	/>
	<meta
		name="keywords"
		content="experiências digitais, Rogue Unit, estúdio Roblox, marketing digital, branding Roblox, campanhas interativas, UGC, jogos digitais, storytelling de marca, engajamento de marca, jovens no Roblox"
	/>

	<meta property="og:title" content="Rogue Unit - Experiências Digitais para Marcas no Roblox" />
	<meta
		property="og:description"
		content="A Rogue Unit cria projetos inovadores no Roblox para marcas que buscam se conectar com o público jovem. Descubra nossos projetos e como podemos transformar sua marca em uma experiência interativa."
	/>
	<meta property="og:image" content="/images/rogue-logo-512.jpg" />
	<meta property="og:url" content="https://www.rogueunit.gg" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Rogue Unit - Experiências Digitais para Marcas no Roblox" />
	<meta
		name="twitter:description"
		content="Transformamos marcas em experiências digitais no Roblox. Conheça nossos projetos com LOUD e Sportv."
	/>
	<meta name="twitter:image" content="/images/rogue-logo-512.jpg" />
</svelte:head>

<Header title="O próximo Level da sua marca no mundo digital">
	<p class="title animate pop delay-1">
		O primeiro e único estúdio brasileiro acelerado pela <a
			href="https://www.roblox.com"
			target="_blank"
			class="highlight">Roblox Corp.</a
		>
	</p>
</Header>

<ScrollIndicator />

<Video />

<Callout />

<Carousel />

<Invite />
