import {collection} from './collectionList.js'


const curentRef = document.location.href.split('#')
const refList = curentRef[curentRef.length - 1].split('/')

const curentCollection = refList[0]
const curentWork = refList[1]
const curentObj = collection[curentCollection][curentWork]

const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero__text');

const slidesContainer = document.querySelector('.glide__slides');

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



let code = '';
let count = curentObj['count'];

for(let x = 1; x < +count + 1; x++){
    code += `
         <li class="glide__slide">
            <div class="glide__bg">
                <picture>
                    <source srcset="static/img/${curentWork}-${x}.webp" type="image/webp">
                    <img class="glide__pic" src="static/img/${curentWork}-${x}.${curentObj['type']}">
                </picture>
            </div>
        </li>`;
}

console.log(code);
slidesContainer.insertAdjacentHTML('afterbegin', code)

const slider = new Glide('.glide', {
    perView: 3,
    type: 'carousel',
    gap: 10,
    breakpoints: {
        1024: {
            perView: 2
        },
        767: {
            perView: 1
        }
    }
});


slider.mount()