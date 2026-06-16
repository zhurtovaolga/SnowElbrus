import { client } from '../sanityClient.js';
import { getPeopleText } from "../utils";

const prices = await client.fetch(`
    *[_type == "prices"][0]{
    seasons,
    note
    }
    `);

const pricesCards = document.querySelector('.prices__cards');
const pricesNote = document.querySelector('.prices__note');

const pricesCardsContent = prices.seasons.map(season => `
    <div class="prices__card">
        <h3 class="prices__card-title">${season.seasonName}</h3>

        ${season.groups.map(group => `
            <div class="prices__group">
                <h4>${getPeopleText(group.peopleCount)}</h4>
                <ul>
                    <li><span>1 час:</span> <strong>${group.oneHourPrice}₽</strong></li>
                    <li><span>2 часа:</span> <strong>${group.twoHoursPrice}₽</strong></li>
                    <li><span>3 часа:</span> <strong>${group.threeHoursPrice}₽</strong></li>
                </ul>
            </div>
        `).join('')}
    </div>
`).join('');

pricesCards.innerHTML = pricesCardsContent;

pricesNote.innerHTML = prices.note;