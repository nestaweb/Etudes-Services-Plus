import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";

class App {
	constructor() {
		document.body.style.opacity = 1;
		this._createLenis();
		this._createHome();
		this._render();
	}

	_createLenis() {
		this.lenis = new Lenis({
			lerp: 0.1,
		});
	}

	_createHome() {
		setTimeout(() => {
			this.home = new Home();
		}, 300);
	}

	_render(time) {
		this.lenis.raf(time);
		requestAnimationFrame(this._render.bind(this));
	}
}

new App();