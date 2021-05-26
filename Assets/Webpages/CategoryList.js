const html = require("html-template-tag");

module.exports = (categories) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>2021 Oscars</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header>2021 Oscars | Nomination Categories</header>
      <div class="nominees">
        ${categories.map(
          (category) => html`<div class="nominee">
            <p>
              <a href="/category/${category.id}">${category.name}</a>
            </p>
          </div>`
        )}
      </div>
    </body>
  </html>`;
