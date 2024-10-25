<div class="scroll-indicator">
	<div class="line animate slide"></div>
	<div class="diamond animate slide"></div>
</div>

<style>
	.scroll-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 2rem 0 3em 0;
	}

	.scroll-indicator .line {
		width: 7px;
		height: 90px;
		background-color: #555;
	}

	.diamond {
		width: 24px;
		height: 24px;
		background-color: #555;
		transform: rotate(45deg);
	}

	.diamond.animate.slide {
		animation-name: animate-slide;
	}

	@keyframes animate-slide {
		0% {
			opacity: 0;
			transform: translate(0, 20px) rotate(0deg);
		}
		100% {
			opacity: 1;
			transform: translate(0, 0) rotate(45deg);
		}
	}
</style>
