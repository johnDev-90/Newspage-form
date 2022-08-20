const btnShow = document.querySelector(`.menu-btn`);

btnShow.addEventListener(`click`, ()=> {
    document.querySelector(`.nav-menu`).classList.toggle(`show`);
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay: 500});
ScrollReveal().reveal('.card-banner-one',{delay: 500});
ScrollReveal().reveal('.card-banner-2',{delay: 500});
