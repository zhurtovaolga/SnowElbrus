import { client } from '../sanityClient.js';

const gallery = await client.fetch(`
    *[_type == "gallery"][0]{
    "images": images[].asset->url,
    }
    `);

const splideGallery = document.querySelector('.splide__list');

let splideGalleryContent = '';
gallery.images.forEach(image => {
  splideGalleryContent += `<li class="splide__slide">
                            <img class="gallery__img" src="${image}" alt="">
                        </li>`
});
splideGallery.innerHTML = splideGalleryContent;

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