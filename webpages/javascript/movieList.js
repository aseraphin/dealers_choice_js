const html = require("html-template-tag");

module.exports = (movies) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Best Picture</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header>2021 | Oscars Best Picture Nominees</header>
      <div class="nominees">
        ${movies.map(
          (movie) => html`<div class="nominee">
            <small class="result">${movie.result}</small>
            <p>
              <a href="/movies/${movie.id}">${movie.title}</a>
              <small>(Directed by ${movie.director})</small>
            </p>
          </div>`
        )}
      </div>
    </body>
  </html>`;
