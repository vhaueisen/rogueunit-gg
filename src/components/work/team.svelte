<script lang="ts">
	let team = [
		{
			name: 'Daniel Piassi',
			role: 'CIO e Roblox Tech Lead',
			image: '/icons/Icon_Daniel.png',
			linkedin: 'https://www.linkedin.com/in/dpiassi'
		},
		{
			name: 'Filipe Lucas',
			role: 'CEO e Diretor Criativo',
			image: '/icons/Icon_Filipe.png',
			linkedin: 'https://www.linkedin.com/in/filipelucasart'
		},
		{
			name: 'Vitor Ruas',
			role: 'CTO',
			image: '/icons/Icon_Vitor.png',
			linkedin: 'https://www.linkedin.com/in/vitor-ruas'
		}
	];
</script>

<div class="container">
	<div class="speech-bubble">
		<h4>Converse com nossos heads!</h4>
	</div>
	<div class="content">
		{#each team as member}
			<div class="team-member">
				<div class="team-data">
					<h4>{member.name}</h4>
					<p>{member.role}</p>
				</div>
				<div class="img-container">
					<a href={member.linkedin} target="_blank">
						<img src={member.image} alt={member.name} />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.content {
		padding-bottom: 64px;
		margin-top: -100px;
		padding-top: 108px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		position: relative;
		gap: 2em;
		background: url('/images/dark-texture.jpg') no-repeat center center / cover;
		width: 100%;
		justify-content: center;
	}

	.team-data,
	.team-member {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.team-data p {
		font-family: Overpass;
		font-size: 16px;
		font-weight: 400;
		line-height: 19.2px;
		text-align: center;
		color: #c8c8c8;
		margin: 0;
	}

	h4 {
		text-align: center;
		margin: 1rem 0;
	}

	.speech-bubble {
		position: relative;
		background: var(--secondary-color);
		color: white;
		font-weight: bold;
		width: 80%;
		max-width: 600px;
		padding: 1rem;
		border-radius: 5px;
		margin-top: 2rem;
		margin-bottom: 3rem;
		z-index: 2;
	}

	.speech-bubble::after {
		content: '';
		position: absolute;
		bottom: -20px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-top: 20px solid var(--secondary-color);
		border-right: 20px solid transparent;
		border-left: 20px solid transparent;
	}

	.img-container {
		width: 80%;
		max-width: 1200px;
		display: flex;
	}

	img {
		width: 100%;
		height: auto;
		margin: 2em auto;
	}

	.img-container a {
		transition: all 0.3s ease;
	}

	.img-container a:hover {
		transform: scale(1.1);
	}

	@media screen and (min-width: 768px) {
		.speech-bubble {
			width: 50%;
			margin-right: 2rem;
			margin-top: 5em;
		}

		.content {
			flex-direction: row;
		}

		.img-container {
			width: 100%;
		}
	}
</style>
