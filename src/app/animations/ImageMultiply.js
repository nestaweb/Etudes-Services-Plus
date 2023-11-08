import Observer from "../classes/Observer";

export default class ImageMultiply extends Observer{
	constructor({ element }) {
		super({ element });
		this.element = element;
	}

	onEnter() {
		this.element.classList.add('is-active');
	}

	onLeave() {
		this.element.classList.remove('is-active');
	}
}