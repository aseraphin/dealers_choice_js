const express = require("express");
const morgan = require("morgan");
const movieData = require("./webpages/javascript/movieData");
const movieDetails = require("./webpages/javascript/movieDetails");
const movieList = require("./webpages/javascript/movieList");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/webpages"));

app.get("/", (req, res) => {
  const movies = movieData.list();
  res.send(movieList(movies));
});

app.get("/movies/:id", (req, res) => {
  const movie = movieData.find(req.params.id);
  res.send(movieDetails(movie));
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
