export default class Carousel<T> {
	private slides: T[] = [];
	private currentSlide = 0;
	private dir = 1;
	private period: number;
	private interval?: NodeJS.Timeout;

	constructor(slides: T[], period?: number) {
		this.slides = slides;
		this.period = period ?? 500;
	}

	public get InTransition() {
		return { x: this.dir * 500, duration: 500 };
	}

	public get OutTransition() {
		return { x: -this.dir * 500, duration: 500 };
	}

	public get CurrentSlide() {
		return this.slides[this.currentSlide];
	}

	public get Slides() {
		return this.slides;
	}

	private resetInterval() {
		this.Stop();
		this.interval = setInterval(() => {
			this.Next();
		}, this.period);
	}

	public Next() {
		this.dir = 1;
		this.currentSlide = (this.currentSlide + 1) % this.slides.length;
		if (this.currentSlide === 0) this.dir = -1;
		this.resetInterval();
	}

	public Previous() {
		this.dir = -1;
		this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
		if (this.currentSlide === this.slides.length - 1) this.dir = 1;
		this.resetInterval();
	}

	public Stop() {
		clearInterval(this.interval);
	}

	public Start() {
		this.resetInterval();
	}
}
