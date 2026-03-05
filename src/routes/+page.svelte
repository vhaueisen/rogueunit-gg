<script>
	import Header from '../components/header.svelte';
	import Callout from '../components/home/callout.svelte';
	import ScrollIndicator from '../components/scroll-indicator.svelte';
	import Carousel from '../components/carousel.svelte';
	import NewsSlide from '../components/home/news-slide.svelte';
	import Invite from '../components/home/invite.svelte';
	import Video from '../components/video.svelte';
	import { base } from '$app/paths';

	let Slides = [
		{
			image: `${base}/news/forbes-mundo-surpresa.webp`,
			alt: 'Captura do jogo "Mundo Surpresa"',
			quote: 'Nestlé Relança o Surpresa, Ícone dos Anos 1990, em Um Jogo no Roblox',
			description:
				'O Roblox está entre as plataformas de interação mais acessadas do mundo, em média, possui mais de 90 milhões de pessoas conectadas diariamente. No ano passado, ela rendeu mais de US$2,8 bilhões em vendas.',
			link: 'https://forbes.com.br/forbes-mkt/2025/01/nestle-relanca-o-surpresa-icone-dos-anos-1990-em-um-jogo-no-roblox/',
			linkText: 'Leia mais'
		},
		{
			image: `${base}/news/marcas-conectadas.webp`,
			alt: 'Filipe Lucas, CEO da Rogue Unit',
			quote: 'Marcas Conectadas Tech: Filipe Lucas',
			description:
				'Conheça os segredos da conexão entre marcas e o universo gamer! A entrevista da nossa série "Marcas Conectadas Tech" com Filipe Lucas, CEO da Rogue Unit, revela como a inovação e o Marketing de Influência estão transformando a forma como as marcas se relacionam com as novas gerações. ',
			link: 'https://bluestudio.estadao.com.br/noticias/aspas/marcas-conectadas-tech-filipe-lucasmarcas/?utm_source=feed&utm_medium=marcas_conectadas_tech&utm_campaign=Filipe_RogueUnit&utm_id=linkedin',
			linkText: 'Leia mais'
		},
		{
			image: `${base}/news/plataformas-ugc.webp`,
			alt: 'Homem jogando videogame',
			quote:
				'Plataformas de jogos UGC: A convergência entre Web 2.0, criatividade e a publicidade para marcas',
			description:
				'O termo web 2.0 é utilizado para descrever a segunda geração da internet, onde o conteúdo a ser consumido pelos usuários passou a ser criado por seus próprios consumidores (UGC - user generated content), em comunidades virtuais.',
			link: 'https://www.tecmundo.com.br/voxel/286520-plataformas-jogos-ugc-convergencia-entre-web-2-0-criatividade-publicidade-marcas.htm',
			linkText: 'Leia mais'
		},
		{
			image: `${base}/news/cabeca-de-lab.jpg`,
			alt: 'Foto dos participantes deste Podcast',
			quote: 'Desenvolvimento de jogos no Roblox Studio',
			description:
				'Neste episódio, mergulharemos no universo do desenvolvimento de jogos no Roblox. Conversaremos sobre o impacto da linguagem Lua e como otimizar jogos para dispositivos móveis. Nossos convidados compartilham suas experiências com a plataforma Roblox Studio, além de compartilharem dicas valiosas para jovens criadores.',
			link: 'https://open.spotify.com/episode/4YYmjiyVx2tVAQQQSA9V7W',
			linkText: 'Escutar'
		},
		{
			image: `${base}/news/loud-league.png`,
			alt: 'Foto da Liga Loud: Lendas do Futebol',
			quote: 'Rogue Unit é a responsável pela estreia da Loud no Roblox',
			description:
				'A iniciativa consiste em um mundo gratuito de experiências que traz uma disputa de futebol para todos os usuários do game. No espaço, eles podem testar habilidades contra outros players, disputar partidas, subir nas classificações e reivindicar o topo do pódio da competição.',
			link: 'https://propmark.com.br/rogue-unit-e-a-responsavel-pela-estreia-da-loud-no-roblox/',
			linkText: 'Leia mais'
		},
		{
			image: `${base}/news/roblox-devs.webp`,
			alt: 'Thumbnail da liga Loud: Lendas do Futebol',
			quote: 'Roblox quer se aproximar dos desenvolvedores brasileiros',
			description:
				'Roblox é uma das maiores plataformas de imersão e conexão, onde cada experiência é criada por e para usuários de todo o mundo. Atualmente, ela possui mais de 79,5 milhões de usuários ativos diários, sendo especialmente popular entre a Geração Z e a Geração Alpha.',
			link: 'https://www.terra.com.br/gameon/plataformas-e-consoles/roblox-quer-se-aproximar-dos-desenvolvedores-brasileiros,629574ffa401bb6354b3fd3e2adbb9931my2ntjd.html',
			linkText: 'Leia mais'
		}
	];
</script>

<svelte:head>
	<title>Rogue Unit - Experiências Digitais para Marcas no Roblox</title>
	<meta
		name="description"
		content="A Rogue Unit é especialista em criar experiências digitais imersivas no Roblox para marcas conectarem-se ao público jovem. Conheça nossos projetos de sucesso com Nestlé, Sportv e LOUD, que transformam storytelling e engajamento em resultados."
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
		content="Transformamos marcas em experiências digitais no Roblox. Conheça nossos projetos com Nestlé, Sportv e LOUD."
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

<Carousel Slide={NewsSlide} Content={Slides} Title="Na Mídia" />

<Invite />
