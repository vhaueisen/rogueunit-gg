<script>
	import Header from '../components/header.svelte';
	import Callout from '../components/home/callout.svelte';
	import ScrollIndicator from '../components/scroll-indicator.svelte';
	import Carousel from '../components/home/news-carousel.svelte';
	import Invite from '../components/home/invite.svelte';
	import Video from '../components/video.svelte';
</script>

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
