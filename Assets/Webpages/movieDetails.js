const html = require("html-template-tag");

module.exports = (movie) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>${movie.title}</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><a href="/">Return Home</a></header>
      <div class="nominees">
        <p class="title">
          ${movie.title} <small>(Directed by ${movie.director})</small>
        </p>
        <p>Rotten Tomatoes: ${movie.rotten}</p>
        <p>Producers: ${movie.producers}</p>
        <p>Summary: ${movie.synopsis}</p>
        <p>Nominations:</p>
        ${movie.categories.map(
          (category) => html` <ul>
            ${category.name}
          </ul>`
        )}
      </div>
    </body>
  </html>`;
