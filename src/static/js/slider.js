import Swiper from './libs/swiper/swiper-bundle.esm.browser.min.js'
import {collection} from './collectionList.js'


const curentRef = document.location.href.split('#')
const refList = curentRef[curentRef.length - 1].split('/')

const curentCollection = refList[0]
const curentWork = refList[1]
const curentObj = collection[curentCollection][curentWork]

const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero__text');

const slider = document.querySelector('.slider');

heroText.insertAdjacentHTML('afterbegin',  `
        <h1 class="title hero__title">${curentObj['name']}</h1>
        <p class="subtitle hero__subtitle">${curentCollection}</p>

    `);

hero.insertAdjacentHTML('afterbegin', `
    <div class="hero__bg">
        <picture>
            <source srcset="static/img/${curentObj['previewPic']}.webp" type="image/webp"/>
            <img class="hero__pic" src="static/img/${curentObj['previewPic']}.${curentObj['type']}" alt="background image"/>
        </picture>
    </div>
`);


slider.insertAdjacentHTML('beforeend', `

    <div class="slider__container swiper-container">
        <div class="swiper-wrapper">
            
        </div>
        <div class="slider__pagination"></div>
        <div class="slider__button swiper-button-next"></div>
        <div class="slider__button swiper-button-prev"></div>
    </div>

    `);
const sliderWrapper = document.querySelector('.swiper-wrapper');

let code = '';

for(let x = 1; x < +curentObj['count'] + 1; x++){
    code += `
        <div class="swiper-slide slide">
                <div class="slide__bg">
                    <picture>
                      <source srcset="static/img/${curentWork}-${x}.webp" type="image/webp"/>
                      <img class="slide__pic" src="static/img/${curentWork}-${x}.jpg" alt="slide bg"/>
                    </picture>
                </div>
            </div>`;
}

sliderWrapper.insertAdjacentHTML('afterbegin', code)

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        forceToAxis: true
    },
    pagination: {
        el: ".slider__pagination",
        type: 'fraction'
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1025: {
            slidesPerView: 3,

        }
    }

})
