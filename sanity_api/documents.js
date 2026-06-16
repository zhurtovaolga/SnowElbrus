import { client } from '../sanityClient.js';

const author = await client.fetch(`
  *[_type == "author"][0]{
    documents[]{
      document_name,
      "url": document_url.asset->url
    },
  }
`);

const authorDocuments = document.querySelector('.documents__grid'); // For documents.html
console.log(authorDocuments)
authorDocuments.innerHTML = author.documents.map(doc => `<div class="document-card">
                <div class="document-card__title">${doc.document_name}</div>
                <img src=${doc.url} alt=${doc.document_name}>
            </div>`).join('');