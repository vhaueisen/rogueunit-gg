<script lang="ts">
	import { page } from '$app/stores';

	let path: string = '/';

	let links: { [key: string]: string } = {
		'/': 'Sobre',
		'/work': 'Serviços',
		'/contact': 'Contato'
	};

	let icons: { [key: string]: string } = {
		roblox: 'https://www.roblox.com/pt/groups/10352289/rogueunit-gg#!/about',
		instagram: 'https://www.instagram.com/rogueunit.gg/',
		tiktok: 'https://www.tiktok.com/@rogueunitgg',
		linkedin: 'https://br.linkedin.com/company/rogueunit'
	};

	function getPath(currentPath: string) {
		path = currentPath;
	}

	$: getPath($page.url.pathname);
</script>

<nav class="navbar">
	<a class="nav-logo" href="/"> <img src="images/logo-horizontal.png" alt="Rogue Unit Logo" /></a>

	<div class="nav-links">
		{#each Object.keys(links) as link}
			<li>
				<a href={link} class:active={path == link}>
					{links[link]}
				</a>
				<span>&nbsp;</span>
			</li>
		{/each}
	</div>

	<div class="nav-icons">
		{#each Object.keys(icons) as icon}
			<a target="_blank" href={icons[icon]}>
				<img src={`icons/${icon}.png`} alt={icon} />
			</a>
		{/each}
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.25rem 2rem;
		background-color: var(--nav-background-color);
		color: white;
		position: relative;
		height: 5em;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		height: 100%;
		width: 20%;
	}

	.nav-logo img {
		height: 100%;
	}

	.nav-links {
		display: flex;
		list-style: none;
		align-items: center;
		justify-content: center;
		gap: 3em;
		width: 100%;
	}

	.nav-links li {
		margin: 0 1.5rem;
		position: relative;
	}

	.nav-links li a {
		font-size: 22px;
		line-height: 28px;
		font-weight: 400;
		text-align: left;
	}

	.nav-links li a,
	.nav-links li a:visited {
		text-align: left;
		color: white;
	}

	.nav-links li a.active {
		color: var(--tertiary-color);
	}

	.nav-links li span {
		display: block;
		position: absolute;
		width: 8px;
		height: 8px;
		top: -10px;
		rotate: 45deg;
		left: calc(50% - 4px);
		background-color: transparent;
		transition: background-color 0.5s ease;
	}

	.nav-links li a:hover + span,
	.nav-links li a.active + span {
		background-color: var(--tertiary-color);
	}

	.nav-icons {
		display: flex;
		gap: 1rem;
		flex-grow: 1;
		align-items: flex-end;
		justify-content: flex-end;
		width: 20%;
	}

	.nav-icons img {
		width: 24px;
		height: 24px;
	}

	@media (max-width: 768px) {
		.nav-links,
		.nav-icons {
			display: none;
		}
	}
</style>
