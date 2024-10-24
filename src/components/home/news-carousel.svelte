<script lang="ts">
	let currentPage = 0;
	let startX = 0;
	let isDragging = false;

	let pages = [
		{
			image: '/images/roblox-characters.png',
			alt: 'Imagem de personagens do Roblox.',
			quote:
				'Como a inovação e o Marketing de Influência estão transformando a forma como as marcas se relacionam com as novas gerações.',
			description:
				'Conheça as expectativas e conexão entre marcas e uma nova geração. A entrevista foi realizada com Marcos Conceição Neto em Blue Studios.',
			linkText: 'Leia mais',
			link: '#'
		},
		{
			image: '/images/roblox-characters.png',
			alt: 'Imagem de personagens do Roblox.',
			quote: 'Outro texto.',
			description: 'Uma breve descrição.',
			linkText: 'Leia mais',
			link: '#'
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
			<a href={pages[currentPage].link} class="button">{pages[currentPage].linkText}</a>
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
		padding: 1rem 2vw;
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
	}

	.quote {
		font-size: 1.2rem;
		font-family: 'Rowdies', sans-serif;
		font-weight: 400;
		text-align: center;
	}

	.button {
		align-self: center;
		background-color: var(--secondary-color);
		color: var(--quaternary-color);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		text-decoration: none;
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
		gap: 1em
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
