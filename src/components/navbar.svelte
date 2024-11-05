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

	let navOpen = false;
	let hamburgerButton: HTMLButtonElement;

	function clickOutside(node: HTMLElement): { destroy: () => void } {
		const handleClick = (event: MouseEvent) => {
			if (
				navOpen &&
				!node.contains(event.target as Node) &&
				!hamburgerButton.contains(event.target as Node)
			) {
				navOpen = false;
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<nav class="navbar">
	<a class="nav-logo" href="/">
		<img src="/images/logo-horizontal.png" alt="Rogue Unit Logo" />
	</a>

	<!-- Desktop Navigation Links -->
	<div class="nav-links">
		{#each Object.keys(links) as link}
			<li>
				<a href={link} class:active={path == link} data-sveltekit-preload-data="hover">
					{links[link]}
				</a>
				<span>&nbsp;</span>
			</li>
		{/each}
	</div>

	<!-- Desktop Icons -->
	<div class="nav-icons">
		{#each Object.keys(icons) as icon}
			<a target="_blank" href={icons[icon]}>
				<img src={`/icons/${icon}.png`} alt={icon} />
			</a>
		{/each}
	</div>

	<button
		class="hamburger"
		on:click={() => (navOpen = !navOpen)}
		class:open={navOpen}
		bind:this={hamburgerButton}
	>
		<span>&nbsp;</span>
		<span>&nbsp;</span>
		<span>&nbsp;</span>
	</button>
</nav>

<!-- Mobile Navigation Menu -->
<div class="mobile-nav {navOpen ? 'open' : ''}" use:clickOutside>
	<ul>
		{#each Object.keys(links) as link}
			<li>
				<a
					href={link}
					class:active={path == link}
					data-sveltekit-preload-data="hover"
					on:click={() => (navOpen = false)}
				>
					{links[link]}
				</a>
			</li>
		{/each}
	</ul>
	<div class="mobile-nav-icons">
		{#each Object.keys(icons) as icon}
			<a target="_blank" href={icons[icon]}>
				<img src={`/icons/${icon}.png`} alt={icon} />
			</a>
		{/each}
	</div>
</div>

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
	
	.hamburger {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		width: 30px;
		height: 25px;
		position: relative;
		padding: 0;
		margin: 0 auto;
		margin-right: 1em;
		z-index: 1100;
	}

	.hamburger span {
		display: block;
		height: 3px;
		width: 100%;
		background: white;
		margin-bottom: 5px;
		position: relative;
		transition: all 0.3s ease-in-out;
	}

	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open span:nth-child(1) {
		transform: rotate(45deg);
		position: absolute;
		top: 40%;
		left: 0;
	}

	.hamburger.open span:nth-child(3) {
		transform: rotate(-45deg);
		position: absolute;
		left: 0;
		top: 40%;
	}

	.mobile-nav {
		position: fixed;
		top: 0;
		right: 0;
		background-color: var(--nav-background-color);
		width: 60%;
		height: 100%;
		text-align: right;
		padding: 4em 2em 2em 2em;
		box-sizing: border-box;
		z-index: 1000;
		overflow-y: auto;
		transition: all 0.3s ease-in-out;
		transform: translateX(100%);
		background-color: var(--primary-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.mobile-nav.open {
		transform: translateX(0);
	}

	.mobile-nav ul {
		flex-grow: 1;
		align-content: center;
	}

	.mobile-nav ul li a.active {
		color: var(--tertiary-color);
	}

	.mobile-nav .mobile-nav-icons {
		align-items: flex-end;
	}

	.mobile-nav ul {
		list-style: none;
		padding: 0;
	}

	.mobile-nav li {
		margin: 2em 0;
		padding-bottom: 1em;
		border-bottom: 1px solid white;
		text-align: center;
	}

	.mobile-nav a {
		color: white;
		text-decoration: none;
		font-size: 1.5em;
	}

	.mobile-nav-icons {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		margin: 0;
	}

	.mobile-nav-icons img {
		width: 24px;
		height: 24px;
	}

	@media (max-width: 768px) {
		.nav-links,
		.nav-icons {
			display: none;
		}

		nav {
			z-index: 1001;
		}

		.navbar {
			padding: 0.5em 0.5em;
			height: 3.5em;
		}

		.hamburger {
			display: block;
		}
	}
</style>
