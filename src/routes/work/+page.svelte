<script>
	import Header from '../../components/header.svelte';
	import ScrollIndicator from '../../components/scroll-indicator.svelte';
	import Carousel from '../../components/work/carousel.svelte';
	import Article from '../../components/work/article.svelte';
	import Team from '../../components/work/team.svelte';
</script>

<svelte:head>
	<title>Experiências de Marca no Roblox | Rogue Unit</title>
	<meta
		name="description"
		content="A Rogue Unit conecta marcas ao público jovem do universo Roblox. Primeiro estúdio brasileiro acelerado pela Roblox, criamos campanhas, itens e experiências imersivas para marcas como Sportv, LOUD. Transforme sua marca em uma experiência inesquecível!"
	/>

	<meta
		name="keywords"
		content="experiências de marca no Roblox, Rogue Unit, estúdio Roblox Brasil, marketing no metaverso, marketing para jogos, advergames, Roblox para marcas, UGC no Roblox, campanhas digitais interativas, itens virtuais Roblox, estúdio brasileiro Roblox"
	/>

	<meta property="og:title" content="Conecte Sua Marca ao universo Roblox com a Rogue Unit" />
	<meta
		property="og:description"
		content="Rogue Unit, o primeiro estúdio brasileiro acelerado pela Roblox, cria experiências e campanhas que engajam o público jovem no Roblox. Marcas como Sportv e LOUD já fazem parte dessa revolução digital – junte-se a elas!"
	/>
	<meta property="og:image" content="/images/roblox-characters.png" />
	<meta property="og:url" content="https://www.rogueunit.gg/work" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Conecte Sua Marca ao universo Roblox com a Rogue Unit" />
	<meta
		name="twitter:description"
		content="Rogue Unit, o primeiro estúdio brasileiro acelerado pela Roblox, cria experiências e campanhas que engajam o público jovem no Roblox. Marcas como Sportv e LOUD já fazem parte dessa revolução digital – junte-se a elas!"
	/>
	<meta name="twitter:image" content="/images/roblox-characters.png" />
</svelte:head>

<Header title="Experiências únicas que integram jogadores e marcas">
	<p class="animate pop delay-1">Confira abaixo</p>
</Header>

<ScrollIndicator />

<Carousel />

<Article />

<Team />
