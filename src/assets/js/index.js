import "../css/index.scss";

import {navSlide} from "./navigation";
navSlide();

import {activeNav} from "./navigation";
activeNav();

import {accordians} from "./accordion";
accordion();

// import {plah} from "./navigation";
// plah();

// import {appearOnScroll} from "./animations";
// appearOnScroll();

Array.from(document.getElementsByTagName("p")).forEach((p) => {
	console.log(`p ${index}, startsWith('W')`, p, p.innerHTML.startsWith("W"));
});
