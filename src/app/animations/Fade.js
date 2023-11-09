import { gsap } from "gsap";
import Observer from "../classes/Observer";

export default class Fade extends Observer {
	constructor({ element }) {
		super({ element });
		this.element = element;

		this.origin = this.element.dataset.animationOrigin;
		if (this.origin === 'left') {
			gsap.set(this.element, {
				x: -100,
				opacity: 0
			})
		}
		else if (this.origin === 'right') {
			gsap.set(this.element, {
				x: 100,
				opacity: 0
			})
		}
		else if (this.origin === 'top') {
			gsap.set(this.element, {
				y: -100,
				opacity: 0
			})
		}
		else if (this.origin === 'bottom') {
			gsap.set(this.element, {
				y: 100,
				opacity: 0
			})
		}
		else {
			gsap.set(this.element, {
				opacity: 0
			})
		}
	}
	onEnter() {
		if (this.origin === 'left') {
			gsap.to(this.element, {
				opacity: 1,
				duration: 1,
				delay: 0.5,
				ease: 'power3',
				x: 0
			})
		}
		else if (this.origin === 'right') {
			gsap.to(this.element, {
				opacity: 1,
				duration: 1,
				delay: 0.5,
				ease: 'power3',
				x: 0
			})
		}
		else if (this.origin === 'top') {
			gsap.to(this.element, {
				opacity: 1,
				duration: 1,
				delay: 0.5,
				ease: 'power3',
				y: 0
			})
		}
		else if (this.origin === 'bottom') {
			gsap.to(this.element, {
				opacity: 1,
				duration: 1,
				delay: 0.5,
				ease: 'power3',
				y: 0
			})
		}
		else {
			gsap.to(this.element, {
				opacity: 1,
				duration: 1,
				delay: 0.5,
				ease: 'power3'
			})
		}
	}
	onLeave() {
		if (this.origin === 'left') {
			gsap.to(this.element, {
				opacity: 0,
				duration: 1,
				ease: 'power3',
				x: -100
			})
		}
		else if (this.origin === 'right') {
			gsap.to(this.element, {
				opacity: 0,
				duration: 1,
				ease: 'power3',
				x: 100
			})
		}
		else if (this.origin === 'top') {
			gsap.to(this.element, {
				opacity: 0,
				duration: 1,
				ease: 'power3',
				y: -100
			})
		}
		else if (this.origin === 'bottom') {
			gsap.to(this.element, {
				opacity: 0,
				duration: 1,
				ease: 'power3',
				y: 100
			})
		}
		else {
			gsap.to(this.element, {
				opacity: 0,
				duration: 1,
				ease: 'power3'
			})
		}
	}
}