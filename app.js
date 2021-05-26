const express = require("express");
const morgan = require("morgan");
const {
  syncAndSeed,
  models: { Movie, Category },
} = require("./Assets/Data/movieData");
const CategoryList = require("./Assets/Webpages/CategoryList");
const movieDetails = require("./Assets/Webpages/movieDetails");
const nomineeList = require("./Assets/Webpages/nomineeList");
const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/Assets"));

app.get("/", async (req, res) => {
  const categories = await Category.findAll();
  res.send(CategoryList(categories));
});

app.get("/category/:id", async (req, res) => {
  const category = await Category.findAll({
    where: {
      id: req.params.id,
    },
    include: Movie,
  });
  res.send(nomineeList(category[0]));
});

app.get("/nominee/:id", async (req, res) => {
  const movie = await Movie.findAll({
    where: {
      id: req.params.id,
    },
    include: Category,
  });
  res.send(movieDetails(movie[0]));
});

const setUp = async () => {
  try {
    await syncAndSeed();
    const PORT = process.env.PORT || 1337;
    await app.listen(PORT, () => console.log(`App listening in port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

setUp();
