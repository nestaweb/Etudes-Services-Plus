import TextReveal from "../animations/TextReveal";
import Button from "../animations/Button";
import ParallaxImage from "../animations/ParallaxImage";
import TextFade from "../animations/TextFade";
import ImageMultiply from "../animations/ImageMultiply";
import Fade from "../animations/Fade";

export default class Page {
	constructor() {
		this._createButtons();
		this._createTextFade();
		this._createTextReveals();
		this._createParallaxImages();
		this._createImageMultiply();
		this._createNavBar();
		this._createFadeAnim();
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

	_createNavBar() {
		const services = document.querySelectorAll("[data-section='service']");
		const navService = document.querySelector("#nav-service");
		const home = document.querySelectorAll("[data-section='hero']");
		const navHero = document.querySelector("#nav-hero");
		const about = document.querySelectorAll("[data-section='about']");
		const navAbout = document.querySelector("#nav-about");
		const contact = document.querySelectorAll("[data-section='contact']");
		const navContact = document.querySelector("#nav-contact");

		let options = {
			rootMargin: "-150px 0px -150px 0px",
			treshold: 1,
		}

		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting)
				{
					this._removeAll();
					navService.querySelector("p").classList.add("active");
				}
				else
					navService.querySelector("p").classList.remove("active");
				});
		}, options);

		services.forEach(service => {
			observer.observe(service);
		});
		
		let observerHero = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting)
				{
					this._removeAll();
					navHero.querySelector("p").classList.add("active");
				}
				else
					navHero.querySelector("p").classList.remove("active");
				});
		}, options);

		home.forEach(hero => {
			observerHero.observe(hero);
		});

		let observerAbout = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting)
				{
					this._removeAll();
					navAbout.querySelector("p").classList.add("active");
				}
				else
					navAbout.querySelector("p").classList.remove("active");
				});
		}, options);

		about.forEach(section => {
			observerAbout.observe(section);
		});

		let observerContact = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting)
				{
					this._removeAll();
					navContact.querySelector("p").classList.add("active");
				}
				else
				{
					navContact.querySelector("p").classList.remove("active");
					navAbout.querySelector("p").classList.add("active");

				}
				});
		}, options);

		contact.forEach(section => {
			observerContact.observe(section);
		});
	}

	_removeAll() {
		const navHero = document.querySelector("#nav-hero");
		const navService = document.querySelector("#nav-service");
		const navAbout = document.querySelector("#nav-about");
		const navContact = document.querySelector("#nav-contact");

		navHero.querySelector("p").classList.remove("active");
		navService.querySelector("p").classList.remove("active");
		navAbout.querySelector("p").classList.remove("active");
		navContact.querySelector("p").classList.remove("active");
	}

	_createFadeAnim() {
		const sections = [...document.querySelectorAll("[data-animation='fade']")];

		sections.forEach((section) => {
			new Fade({
				element: section
			});
		});
	}
}
