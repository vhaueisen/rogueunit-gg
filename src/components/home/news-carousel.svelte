<script lang="ts">
	let currentPage = 0;
	let startX = 0;
	let isDragging = false;

	let pages = [
		{
			image: '/news/marcas-conectadas.webp',
			alt: 'Filipe Lucas, CEO da Rogue Unit',
			quote: 'Marcas Conectadas Tech: Filipe Lucas',
			description:
				'Conheça os segredos da conexão entre marcas e o universo gamer! A entrevista da nossa série "Marcas Conectadas Tech" com Filipe Lucas, CEO da Rogue Unit, revela como a inovação e o Marketing de Influência estão transformando a forma como as marcas se relacionam com as novas gerações. ',
			link: 'https://bluestudio.estadao.com.br/noticias/aspas/marcas-conectadas-tech-filipe-lucasmarcas/?utm_source=feed&utm_medium=marcas_conectadas_tech&utm_campaign=Filipe_RogueUnit&utm_id=linkedin',
			linkText: 'Leia mais'
		},
		{
			image: '/news/plataformas-ugc.webp',
			alt: 'Homem jogando videogame',
			quote:
				'Plataformas de jogos UGC: A convergência entre Web 2.0, criatividade e a publicidade para marcas',
			description:
				'O termo web 2.0 é utilizado para descrever a segunda geração da internet, onde o conteúdo a ser consumido pelos usuários passou a ser criado por seus próprios consumidores (UGC - user generated content), em comunidades virtuais.',
			link: 'https://www.tecmundo.com.br/voxel/286520-plataformas-jogos-ugc-convergencia-entre-web-2-0-criatividade-publicidade-marcas.htm',
			linkText: 'Leia mais'
		},
		{
			image: '/news/loud-league.png',
			alt: 'Foto da Liga Loud: Lendas do Futebol',
			quote: 'Rogue Unit é a responsável pela estreia da Loud no Roblox',
			description:
				'A iniciativa consiste em um mundo gratuito de experiências que traz uma disputa de futebol para todos os usuários do game. No espaço, eles podem testar habilidades contra outros players, disputar partidas, subir nas classificações e reivindicar o topo do pódio da competição.',
			link: 'https://propmark.com.br/rogue-unit-e-a-responsavel-pela-estreia-da-loud-no-roblox/',
			linkText: 'Leia mais'
		},
		{
			image: '/news/roblox-devs.webp',
			alt: 'Thumbnail da liga Loud: Lendas do Futebol',
			quote: 'Roblox quer se aproximar dos desenvolvedores brasileiros',
			description:
				'Roblox é uma das maiores plataformas de imersão e conexão, onde cada experiência é criada por e para usuários de todo o mundo. Atualmente, ela possui mais de 79,5 milhões de usuários ativos diários, sendo especialmente popular entre a Geração Z e a Geração Alpha.',
			link: 'https://www.terra.com.br/gameon/plataformas-e-consoles/roblox-quer-se-aproximar-dos-desenvolvedores-brasileiros,629574ffa401bb6354b3fd3e2adbb9931my2ntjd.html',
			linkText: 'Leia mais'
		},
		{
			image: '/news/wow-gaming.jpg',
			alt: 'Time Wow Gaming Ventures',
			quote: 'WoW Gaming Ventures se apresenta ao mercado',
			description:
				'A holding WoW Gaming Ventures se apresenta ao mercado com cinco empresas especializadas em soluções de marketing gamer para marcas, agências e jogadores.',
			link: 'https://forbes.com.br/forbes-tech/2024/05/wow-gaming-ventures-se-apresenta-ao-mercado/',
			linkText: 'Leia mais'
		}
	];

	const handleMouseDown = (event: PointerEvent) => {
		startX = event.clientX;
		isDragging = true;
	};

	const handleMouseUp = () => {
		isDragging = false;
	};

	const handleMouseMove = (event: PointerEvent) => {
		if (!isDragging) return;
		const diff = event.clientX - startX;
		if (diff > 100) {
			prevPage();
			isDragging = false;
		} else if (diff < -100) {
			nextPage();
			isDragging = false;
		}
	};

	const nextPage = () => {
		currentPage = (currentPage + 1) % pages.length;
	};

	const prevPage = () => {
		currentPage = (currentPage - 1 + pages.length) % pages.length;
	};
</script>

<div
	class="carousel"
	on:pointerdown={handleMouseDown}
	on:pointerup={handleMouseUp}
	on:pointermove={handleMouseMove}
	aria-controls="carousel"
	aria-roledescription="carousel"
	aria-label="carousel"
>
	<div class="header">Na Mídia</div>
	<div class="content">
		<img src={pages[currentPage].image} alt={pages[currentPage].alt} />
		<div class="text">
			<div class="quote">"{pages[currentPage].quote}"</div>
			<div>{pages[currentPage].description}</div>
			<div class="link">
			<a href={pages[currentPage].link} class="button" target="_blank"
				>{pages[currentPage].linkText}</a
			>
			</div>
		</div>
	</div>
	<div class="pagination">
		{#each pages as _, index}
			<button
				class:active={index === currentPage}
				on:click={() => {
					currentPage = index;
				}}
			></button>
		{/each}
	</div>
</div>

<style>
	.carousel {
		width: calc(100% - 73px);
		max-width: 800px;
		background-color: var(--tertiary-color);
		color: var(--quaternary-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2em 2vw;
		position: relative;
		user-select: none;
		margin: 2rem auto;
		border-radius: 5px;
	}

	.header {
		font:
			400 1.5rem 'Rowdies',
			sans-serif;
		background-color: var(--quaternary-color);
		color: var(--primary-color);
		padding: 0.5rem 1rem;
		position: absolute;
		top: -1.5rem;
		left: 5%;
		z-index: 3;
		min-width: 6.5rem;
		text-align: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1rem;
		height: 100%;
	}

	img {
		width: 100%;
		max-width: 300px;
		border-radius: 8px;
		object-fit: cover;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		height: 100%;
	}

	.quote {
		font-size: 1.2rem;
		font-family: 'Rowdies', sans-serif;
		font-weight: 400;
		text-align: center;
	}

	.link {
		flex-grow: 1;
		display: flex;
		padding-bottom: 1em;
	}
	
	.button {
		background-color: var(--secondary-color);
		color: var(--quaternary-color);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		text-decoration: none;
		align-self: flex-end!important;
	}

	.pagination {
		margin-top: 1rem;
		display: flex;
		gap: 0.5rem;
	}

	.pagination button {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.5);
		border: none;
		cursor: pointer;
	}

	.pagination button.active {
		background-color: var(--quaternary-color);
	}

	.quote {
		text-align: left;
	}

	.text {
		align-items: flex-start;
		gap: 1em;
	}

	.button {
		align-self: flex-start;
	}

	/* Estilos responsivos */
	@media screen and (min-width: 600px) {
		.content {
			flex-direction: row;
			align-items: center;
		}
	}

	@media screen and (min-width: 768px) {
		.carousel {
			height: 280px;
		}

		.content {
			gap: 2rem;
		}

		img {
			width: 35%;
			height: 100%;
		}

		.text {
			height: 100%;
			justify-content: center;
			padding: 1rem;
		}

		.pagination {
			position: absolute;
			bottom: 1rem;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
