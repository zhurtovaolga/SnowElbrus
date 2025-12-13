const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger');
const docsBtn = document.querySelector('.about__diploma');

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const navBtnDisplay = window.getComputedStyle(navBtn).display;

    if (navBtnDisplay === 'none') {
        header.classList.toggle('scrolled', window.scrollY > 100);
    }

});

navBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    navBtn.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        gap: '20px',
        autoplay: true,
        interval: 3000,
        breakpoints: {
            900: { perPage: 2 },
            600: { perPage: 1 },
            400: { gap: '10px' }
        }
    }).mount();
});

docsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('/documents.html', '_blank');
});

const slider = document.querySelector('.about__slides');
const slides = document.querySelectorAll('.about__item');
const btnNext = document.querySelector('.slide-arrow.right');
const btnPrev = document.querySelector('.slide-arrow.left');
let index = 0;

btnNext.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
});

btnPrev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
});

