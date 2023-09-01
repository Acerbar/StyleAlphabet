"use strict"


/* INTRO BLOCKS ANIMATION*/

const block_1 = document.getElementById('ib1');
const block_2 = document.getElementById('ib2');
const block_3 = document.getElementById('ib3');
if(window.innerWidth > 599.99){
    setTimeout(function(){block_1.classList.add("intro__block_active")}, 2000);
    setTimeout(function (){ block_2.classList.add("intro__block_active") }, 1500);
    setTimeout(function (){ block_3.classList.add("intro__block_active") }, 1000);
}
else{
    setTimeout(function () { block_1.classList.add("intro__block_active") }, 1200);
    setTimeout(function () { block_2.classList.add("intro__block_active") }, 1200);
    setTimeout(function () { block_3.classList.add("intro__block_active") }, 1200);
}

/* BURGER MENU */

const burger = document.querySelector('.burger');
const navBurger = document.querySelector(".burger__nav");


document.addEventListener('click', function(event){
    if(event.target.closest('.burger')){
        burger.classList.toggle('burger__active');
        navBurger.classList.toggle('burger__visible');
        document.body.classList.toggle('_locked');
    }
    if(!event.target.closest('.burger__menu')){
        burger.classList.remove('burger__active');
        navBurger.classList.remove('burger__visible');
        document.body.classList.remove('_locked');
    }
})


/* SWIPER */

new Swiper('.about__photo', {
    navigation: {
        nextEl: '.about-arrow_right',
        prevEl: '.about-arrow_left'
    },
    pagination: {
        el: '.about-pagination',
        type: "progressbar",
    },
    grabCursor: true,
    autoHeight: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    loop: true,
});