const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger');

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


/******* Modal documents *******/
const modal = document.querySelector('.documents-modal');
const modalOpenBtn = document.querySelector('.about__diploma');
const modalCloseBtn = document.querySelector('.documents-modal__close');
const overlay = document.querySelector('.documents-modal__overlay');

function closeModal() {
    modal.classList.remove('active');
}

modalOpenBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

modalCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('document-preview')) {
        window.open(e.target.src, '_blank');
    }
});