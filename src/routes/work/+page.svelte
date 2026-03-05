<script>
	import Header from '../../components/header.svelte';
	import ScrollIndicator from '../../components/scroll-indicator.svelte';
	import Carousel from '../../components/carousel.svelte';
	import Article from '../../components/work/article.svelte';
	import Team from '../../components/work/team.svelte';
	import ProjectSlide from '../../components/work/project-slide.svelte';
	import { base } from '$app/paths';

	let Projects = [
		{
			title: 'NESTLÉ',
			subtitle: 'Mundo Surpresa',
			image: `${base}/images/mundo-surpresa.webp`,
			alt: 'Thumbnail do Neslté Mundo Surpresa.',
			link: 'https://www.roblox.com/games/16187824627/Mundo-Surpresa',
			branded: true
		},
		{
			title: 'LOUD',
			subtitle: 'Liga Loud: Lendas do Futebol',
			image: `${base}/images/loud-league.png`,
			alt: 'Thumbnail da Liga Loud: Lendas do Futebol.',
			link: 'https://www.roblox.com/games/15505318000/LOUD-League-Soccer-Legends',
			branded: true
		},
		{
			title: 'SPORTV',
			subtitle: 'Sportv Land',
			image: `${base}/images/sportv-land.jpg`,
			alt: 'Thumbnail do Sportv Land.',
			link: 'https://www.roblox.com/games/11512530631/SportvLand',
			branded: true
		},
		{
			title: 'ROGUE UNIT',
			subtitle: 'Hyperlight Wings',
			image: `${base}/images/hyperlight-wings.png`,
			alt: 'Thumbnail do Hyperlight Wings.',
			link: 'https://www.roblox.com/games/6882790797/Open-Alpha-Hyperlight-Wings'
		}
	];
</script>

<svelte:head>
	<title>Experiências de Marca no Roblox | Rogue Unit</title>
	<meta
		name="description"
		content="A Rogue Unit conecta marcas ao público jovem do universo Roblox. Primeiro estúdio brasileiro acelerado pela Roblox, criamos campanhas, itens e experiências imersivas para marcas como Nestlé, Sportv, LOUD. Transforme sua marca em uma experiência inesquecível!"
	/>

	<meta
		name="keywords"
		content="experiências de marca no Roblox, Rogue Unit, estúdio Roblox Brasil, marketing no metaverso, marketing para jogos, advergames, Roblox para marcas, UGC no Roblox, campanhas digitais interativas, itens virtuais Roblox, estúdio brasileiro Roblox"
	/>

	<meta property="og:title" content="Conecte Sua Marca ao universo Roblox com a Rogue Unit" />
	<meta
		property="og:description"
		content="Rogue Unit, o primeiro estúdio brasileiro acelerado pela Roblox, cria experiências e campanhas que engajam o público jovem no Roblox. Marcas como Nestlé, Sportv e LOUD já fazem parte dessa revolução digital – junte-se a elas!"
	/>
	<meta property="og:image" content="/images/roblox-characters.png" />
	<meta property="og:url" content="https://www.rogueunit.gg/work" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Conecte Sua Marca ao universo Roblox com a Rogue Unit" />
	<meta
		name="twitter:description"
		content="Rogue Unit, o primeiro estúdio brasileiro acelerado pela Roblox, cria experiências e campanhas que engajam o público jovem no Roblox. Marcas como Nestlé, Sportv e LOUD já fazem parte dessa revolução digital – junte-se a elas!"
	/>
	<meta name="twitter:image" content="/images/roblox-characters.png" />
</svelte:head>

<Header title="Experiências únicas que integram jogadores e marcas">
	<p class="animate pop delay-1">Confira abaixo</p>
</Header>

<ScrollIndicator />

<Carousel Slide={ProjectSlide} Content={Projects} Title="Experiências imersivas" />

<Article />

<Team />
