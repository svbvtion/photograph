'use strict';

const modalLinks = document.querySelectorAll('.modal__link');

modalLinks.forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault()
		createModal()
	});
});


function createModal() {
	body.insertAdjacentHTML('beforeend', `
		<div class="modal active" id="modal">
	      <div class="modal__overlay" data-close="true">
	        <div class="modal__window"><span class="modal__close" data-close="true">&times</span>
	          <div class="modal__body">
	            <div class="modal__item modal__content">
	              <h2 class="modal__title title">Связаться</h2>
	              <form class="form">
	                <div class="form__field">
	                  <input class="form__input" type="text" placeholder="Ваше имя" required>
	                </div>
	                <div class="form__field">
	                  <input class="form__input" type="email" placeholder="Ваш Email" required>
	                </div>
	                <div class="form__field">
	                  <input class="form__input" type="tel" placeholder="Ваш телефон" required>
	                </div>
	                <div class="form__submit">
	                  <button class="form__button">Отправить<span class="form__button_decor"></span></button>
	                </div>
	              </form>
	            </div>
	            <div class="modal__decor modal__item">
	              <div class="modal__bg">
	                <picture>
	                  <source srcset="static/img/card-img_2.webp" type="image/webp"/><img class="modal__pic" src="static/img/card-img_2.png" alt="card"/>
	                </picture>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
		`);	

	body.classList.add('lock');

	const modal = document.querySelector('.modal');
	modal.addEventListener('click', function(e) {
		if(e.target.dataset.close){
			modal.parentNode.removeChild(modal);
			body.classList.remove('lock');
		}
	});
}