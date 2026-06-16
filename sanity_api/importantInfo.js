import { client } from '../sanityClient.js';
import { toHTML } from '@portabletext/to-html';

const importantInfo = await client.fetch(`
    *[_type == "importantInfo"][0]{
    "equipment_link": equipment_center.equipment_link,
    "equipment_name": equipment_center.equipment_name,
    "equipment_about": equipment_center.equipment_about,
    skiers_guide
    }
    `);

const equipmentCenter = document.querySelector('.info-extra');
const infoCard = document.querySelector('.info-card ul');

equipmentCenter.innerHTML = `Рекомендуемый экипировочный центр:
                <a href=${importantInfo.equipment_link} target="_blank">${importantInfo.equipment_name}</a> – ${importantInfo.equipment_about}`;

infoCard.innerHTML = importantInfo.skiers_guide.map(guide => toHTML(guide)).join('');