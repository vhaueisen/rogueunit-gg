<script>
	import { base } from '$app/paths';
</script>

<footer>
	<a class="footer-logo" href="{base}/">
		<img src="{base}/images/logo-horizontal.png" alt="Rogue Unit Logo" />
	</a>
	<a class="link" href="{base}/contact">Fale com a gente!</a>
	<div class="footer-icons">
		<a target="_blank" href="https://www.roblox.com/pt/groups/10352289/rogueunit-gg#!/about">
			<img src="{base}/icons/roblox.png" alt="Roblox" />
		</a>
		<a target="_blank" href="https://www.instagram.com/rogueunit.gg/">
			<img src="{base}/icons/instagram.png" alt="Instagram" />
		</a>
		<a target="_blank" href="https://www.tiktok.com/@rogueunitgg">
			<img src="{base}/icons/tiktok.png" alt="TikTok" />
		</a>
		<a target="_blank" href="https://br.linkedin.com/company/rogueunit"
			><img src="{base}/icons/linkedin.png" alt="LinkedIn" />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.25rem 2rem;
		background-color: var(--nav-background-color);
		color: white;
		position: relative;
		height: 5em;
		text-align: center;
	}

	.link {
		text-align: center;
		text-decoration: none;
		color: white;
		font-size: 16pt;
	}

	.link:hover {
		text-decoration: underline;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		height: 100%;
		width: 20%;
	}

	.footer-logo img {
		height: 100%;
	}

	.footer-icons {
		display: flex;
		gap: 1rem;
		align-items: flex-end;
		justify-content: flex-end;
		width: 20%;
	}

	.footer-icons img {
		width: 24px;
		height: 24px;
	}

	@media (max-width: 768px) {
		.link {
			display: none;
		}

		footer {
			padding: 0.5em 0.5em;
			height: 3.5em;
		}
	}
</style>
