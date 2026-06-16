import { client } from '../sanityClient.js';

const registration = await client.fetch(`
    *[_type == "registration"][0]{
    teleram_link,
    google_form_link,
    phone_number
    }
    `);

const telegramLink = document.getElementById('telegram_link');
const googleFormLink = document.getElementById('google_form_link');
const contactNumber = document.getElementById('contact_number');

telegramLink.href = registration.teleram_link;

googleFormLink.href = registration.google_form_link;

let formattedPhone = registration.phone_number.startsWith("+") ? registration.phone_number : "+" + registration.phone_number;
contactNumber.textContent = `📞 ${registration.phone_number}`;
contactNumber.href = `tel:${formattedPhone.replaceAll(/[^0-9+]/g, "")}`;