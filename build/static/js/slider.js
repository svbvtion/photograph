import Swiper from"./libs/swiper/swiper-bundle.esm.browser.min.js";import{collection}from"./collectionList.js";const curentRef=document.location.href.split("#"),refList=curentRef[curentRef.length-1].split("/"),curentCollection=refList[0],curentWork=refList[1],curentObj=collection[curentCollection][curentWork],slider=document.querySelector(".slider");slider.insertAdjacentHTML("beforeend",'\n\n    <div class="slider__container swiper-container">\n        <div class="swiper-wrapper">\n            \n        </div>\n        <div class="slider__pagination"></div>\n        <div class="slider__button swiper-button-next"></div>\n        <div class="slider__button swiper-button-prev"></div>\n    </div>\n\n    ');const sliderWrapper=document.querySelector(".swiper-wrapper");let code="";for(let e=1;e<+curentObj.count+1;e++)code+=`\n        <div class="swiper-slide slide">\n                <div class="slide__bg">\n                    <picture>\n                      <source srcset="static/img/${curentWork}-${e}.webp" type="image/webp"/>\n                      <img class="slide__pic" src="static/img/${curentWork}-${e}.jpg" alt="slide bg"/>\n                    </picture>\n                </div>\n            </div>`;sliderWrapper.insertAdjacentHTML("afterbegin",code);let swiper=new Swiper(".swiper-container",{slidesPerView:1,spaceBetween:10,keyboard:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{forceToAxis:!0},pagination:{el:".slider__pagination",type:"fraction"},breakpoints:{600:{slidesPerView:2},1025:{slidesPerView:3}}});