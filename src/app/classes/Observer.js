export default class Observer {
	constructor({ element }) {
		this.element = element;
		this._createObserver();
	}

	_createObserver() {

		const options = {
			rootMargin: '-50px 0px -150px 0px',
			treshold: 1,
		}

		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting)
					this.onEnter();
				else
					this.onLeave();
			});
		}, options);

		this.observer.observe(this.element);
	}

	onEnter() {}

	onLeave() {}
}