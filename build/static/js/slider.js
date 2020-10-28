import{collection}from"./collectionList.js";const curentRef=document.location.href.split("#"),refList=curentRef[curentRef.length-1].split("/"),curentCollection=refList[0],curentWork=refList[1],curentObj=collection[curentCollection][curentWork],hero=document.querySelector(".hero"),heroText=document.querySelector(".hero__text"),slidesContainer=document.querySelector(".glide__slides");heroText.insertAdjacentHTML("afterbegin",`\n        <h1 class="title hero__title">${curentObj.name}</h1>\n        <p class="subtitle hero__subtitle">${curentCollection}</p>\n\n    `),hero.insertAdjacentHTML("afterbegin",`\n    <div class="hero__bg">\n        <picture>\n            <source srcset="static/img/${curentObj.previewPic}.webp" type="image/webp"/>\n            <img class="hero__pic" src="static/img/${curentObj.previewPic}.${curentObj.type}" alt="background image"/>\n        </picture>\n    </div>\n`);let code="",count=curentObj.count;for(let e=1;e<+count+1;e++)code+=`\n         <li class="glide__slide">\n            <div class="glide__bg">\n                <picture>\n                    <source srcset="static/img/${curentWork}-${e}.webp" type="image/webp">\n                    <img class="glide__pic" src="static/img/${curentWork}-${e}.${curentObj.type}">\n                </picture>\n            </div>\n        </li>`;console.log(code),slidesContainer.insertAdjacentHTML("afterbegin",code);const slider=new Glide(".glide",{perView:3,type:"carousel",gap:10,breakpoints:{1024:{perView:2},767:{perView:1}}});slider.mount();