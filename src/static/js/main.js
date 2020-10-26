'use strict';


const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const heroTop = document.querySelector('.hero__top');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
	body.classList.toggle('.lock');
	burger.classList.toggle('active');
	heroTop.classList.toggle('active');
	headerMenu.style.top = heroTop.offsetHeight+'px'
	headerMenu.classList.toggle('active');
});