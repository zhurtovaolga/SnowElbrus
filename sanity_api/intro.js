import { client } from '../sanityClient.js';

const introInfo = await client.fetch(`
    *[_type == "intro"][0]{
    intro_title, 
    intro_subtitle, 
    "imageUrl": title_image.asset->url
    }
    `);

const introTitle = document.querySelector('.intro__title');
const introImage = document.querySelector('.intro');

introTitle.textContent = introInfo.intro_title;
introImage.style.backgroundImage = `url(${introInfo.imageUrl})`;