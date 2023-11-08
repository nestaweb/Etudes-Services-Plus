import SplitType from 'split-type'
import {gsap} from "gsap";

export default class TextFade {
	constructor({ target }) {
		const bg = target.dataset.bgColor
		const fg = target.dataset.fgColor
	
		const text = new SplitType(target, { types: 'chars',  tagName: 'span'})
	
		gsap.fromTo(text.chars, 
			{
				color: bg,
			},
			{
				color: fg,
				duration: 0.5,
				stagger: 0.08,
				delay: 1,
				scrollTrigger: {
					trigger: target,
					start: 'top 70%',
					end: 'top 30%',
					scrub: true,
					markers: false,
					toggleActions: 'play play reverse reverse'
				}
		});
	}
}