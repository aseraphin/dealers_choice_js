const html = require("html-template-tag");

module.exports = (nominees) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>${nominees.name}</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header>2021 Oscars | ${nominees.name} Nominees</header>
      <div class="nominees">
        ${nominees.movies.map(
          (nominee) => html`<div class="nominee">
            <small class="result">${nominee.result}</small>
            <p>
              <a href="/nominee/${nominee.id}">${nominee.title}</a>
              <small>(Directed by ${nominee.director})</small>
            </p>
          </div>`
        )}
      </div>
    </body>
  </html>`;
