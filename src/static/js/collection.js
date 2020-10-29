import {collection} from './collectionList.js'

const curentRef = document.location.href.split('#')
const curentCollection = curentRef[curentRef.length - 1]

const collectionTitle = document.querySelector('.collection__page_title');

let art = collection[curentCollection]
let artKeys = Object.keys(art)

const worksContainer = document.querySelector('.works');


collectionTitle.textContent = curentCollection;

let collectHTML = '';

artKeys.forEach((i, index) => {
	if(index % 3 === 0){
		collectHTML += `<div class="works__row">`;
	} 
	if(art[i]['big']){
		collectHTML += `<a class="work work_big" href="./gallery.html#${curentCollection}/${i}">`;
	} else {
		collectHTML += `<a class="work" href="./gallery.html#${curentCollection}/${i}">`
	}
	
	collectHTML += `
		<div class="work__bg">
			<picture>
				<source srcset="static/img/${art[i]['previewPic']}.webp" type="image/webp"/>
				<img class="work__pic" src="static/img/${art[i]['previewPic']}.${art[i]['type']}" alt="work pic"/>
			</picture>
		</div>
		 <div class="work__description">
		 	<span class="work__name">${art[i]['name']}</span>
		 </div>
	</a>`
	if ((index + 1) % 3 === 0 || index === artKeys.length - 1) {
		collectHTML += `</div>`
	}
});
worksContainer.insertAdjacentHTML('beforeend', collectHTML)