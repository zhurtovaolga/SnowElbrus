import { client } from '../sanityClient.js';
import { toHTML } from '@portabletext/to-html';

const author = await client.fetch(`
  *[_type == "author"][0]{
    name,
    badges,
    slides,
    lessonInfo,
    lessonFormat,
    "imageUrl": image.asset->url,
  }
`);

const authorImage = document.querySelector('.about__photo');
const authorName = document.querySelector('.about__name');
const authorBadges = document.querySelector('.about__badges');
const authorSlides = document.querySelector('.about__slides');
const authorLessons = document.querySelector('.about__lessons');
const authorFormat = document.querySelector('.about__format');

authorImage.src = `${author.imageUrl}`;
authorName.textContent = author.name;
authorBadges.innerHTML = '';
author.badges.forEach(badge => {
    authorBadges.innerHTML += `<li>${badge}</li>`
});

let authorSlidesContent = '';
author.slides.forEach(slide => {
    authorSlidesContent += `<div class="about__item">
                                ${slide.title ? `<h3>${slide.title}</h3>` : ''}
                                ${toHTML(slide.content)}
                            </div>`;
});
authorSlides.innerHTML = authorSlidesContent;

authorLessons.innerHTML = '';
authorLessons.innerHTML = toHTML(author.lessonInfo);

authorFormat.innerHTML = '';
authorFormat.innerHTML = toHTML(author.lessonFormat);