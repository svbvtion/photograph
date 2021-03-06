'use strict';

const modalLinks = document.querySelectorAll('.modal__link');
const modal = document.querySelector('.modal');

modalLinks.forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault()
		createModal()
	});
});

modal.addEventListener('click', function(e) {
		if(e.target.dataset.close){
			console.log('obj');
			modal.classList.remove('active')
			body.classList.remove('lock');
			body.style.marginRight = 0;

		}
	});

function createModal() {

	let scrollWidth = window.innerWidth - body.offsetWidth;

	body.style.marginRight = scrollWidth + 'px'
	modal.classList.add('active')
	body.classList.add('lock');
}