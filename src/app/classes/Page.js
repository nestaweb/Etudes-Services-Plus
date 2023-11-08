import TextReveal from "../animations/TextReveal";
import Button from "../animations/Button";
import ParallaxImage from "../animations/ParallaxImage";
import TextFade from "../animations/TextFade";
import ImageMultiply from "../animations/ImageMultiply";

export default class Page {
	constructor() {
		this._createButtons();
		this._createTextFade();
		this._createTextReveals();
		this._createParallaxImages();
		this._createImageMultiply();
	}

	_createTextReveals() {
		const textItems = [...document.querySelectorAll("[data-animation='text-reveal']")];

		textItems.forEach((textItem) => {
			new TextReveal({
				element: textItem
			});
		});
	}

	_createButtons() {
		const buttons = [...document.querySelectorAll("[data-animation='button']")];

		buttons.forEach((button) => {
			new Button({
				element: button
			});
		});
	}

	_createParallaxImages() {
		const images = [...document.querySelectorAll("[data-animation='parallax-image']")];

		images.forEach((image) => {
			new ParallaxImage({
				imageSection: image
			});
		});
	}

	_createTextFade() {

		const textItems = [...document.querySelectorAll("[data-animation='text-fade']")];

		textItems.forEach((textItem) => {
			new TextFade({
				target: textItem
			});
		});
	}

	_createImageMultiply() {
		const images = [...document.querySelectorAll("[data-animation='image-multiply']")];

		images.forEach((image) => {
			new ImageMultiply({
				element: image
			});
		});
	}
}
