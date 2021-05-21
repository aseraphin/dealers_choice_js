const express = require("express");
const morgan = require("morgan");
const { client, syncAndSeed } = require("./webpages/javascript/movieData");
const movieDetails = require("./webpages/javascript/movieDetails");
const movieList = require("./webpages/javascript/movieList");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/webpages"));

app.get("/", async (req, res) => {
  const movies = await client.query("SELECT * FROM Movie");
  res.send(movieList(movies.rows));
});

app.get("/movies/:id", async (req, res) => {
  const movie = await client.query("SELECT * FROM Movie WHERE id=$1", [
    req.params.id,
  ]);
  res.send(movieDetails(movie.rows[0]));
});

const PORT = process.env.PORT || 1337;

const setUp = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    await app.listen(PORT, () => console.log(`App listening in port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

setUp();
