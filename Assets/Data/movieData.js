const Sequelize = require("sequelize");
const conn = new Sequelize("postgres://localhost/dealers_choice_db");
const { STRING, TEXT, UUID, UUIDV4 } = Sequelize;

const movies = [
  {
    rotten: "94%",
    title: "Nomadland",
    director: "Chloe Zhao",
    producers:
      "Frances McDormand, Peter Spears, Mollye Asher, Dan Janvey and Chloé Zhao",
    synopsis:
      "A woman in her sixties who, after losing everything in the Great Recession, embarks on a journey through the American West, living as a van-dwelling modern-day nomad.",
    result: "WINNER",
  },
  {
    rotten: "98%",
    title: "The Father",
    director: "Florian Zeller",
    producers: "David Parfitt, Jean-Louis Livi and Philippe Carcassonne",
    synopsis:
      "Anthony is 80, mischievous, living defiantly alone and rejecting the carers that his daughter, Anne, encouragingly introduces. Yet help is also becoming a necessity for Anne; she can't make daily visits anymore and Anthony's grip on reality is unravelling. As we experience the ebb and flow of his memory, how much of his own identity and past can Anthony cling to? How does Anne cope as she grieves the loss of her father, while he still lives and breathes before her? THE FATHER warmly embraces real life, through loving reflection upon the vibrant human condition; heart-breaking and uncompromisingly poignant - a movie that nestles in the truth of our own lives.",
    result: "NOMINEES",
  },
  {
    rotten: "96%",
    title: "Judas and the Black Messiah",
    director: "Shaka King",
    producers: "Shaka King, Charles D. King and Ryan Coogler",
    synopsis:
      "Offered a plea deal by the FBI, William O'Neal infiltrates the Illinois chapter of the Black Panther Party to gather intelligence on Chairman Fred Hampton.",
  },
  {
    rotten: "83%",
    title: "Mank",
    director: "David Fincher",
    producers: "Ceán Chaffin, Eric Roth and Douglas Urbanski",
    synopsis:
      "1930s Hollywood is reevaluated through the eyes of scathing wit and alcoholic screenwriter Herman J. Mankiewicz as he races to finish 'Citizen Kane.'",
  },
  {
    rotten: "98%",
    title: "Minari",
    director: "Lee Isaac Chung",
    producers: "Christina Oh",
    synopsis:
      "A Korean American family moves to an Arkansas farm in search of its own American dream. Amidst the challenges of this new life in the strange and rugged Ozarks, they discover the undeniable resilience of family and what really makes a home.",
  },
  {
    rotten: "90%",
    title: "Promising Young Woman",
    director: "Emerald Fennell",
    producers: "Ben Browning, Ashley Fox, Emerald Fennell and Josey McNamara",
    synopsis:
      "Nothing in Cassie's life is what it appears to be -- she's wickedly smart, tantalizingly cunning, and she's living a secret double life by night. Now, an unexpected encounter is about to give Cassie a chance to right the wrongs from the past.",
  },
  {
    rotten: "97%",
    title: "Sound of Metal",
    director: "Darius Marder",
    producers: "Bert Hamelinck and Sacha Ben Harroche",
    synopsis:
      "A heavy-metal drummer's life is thrown into freefall when he begins to lose his hearing.",
  },
  {
    rotten: "92%",
    title: "The Trial of the Chicago 7",
    director: "Aaron Sorkin",
    producers: "Marc Platt and Stuart Besser",
    synopsis:
      "The film is based on the infamous 1969 trial of seven defendants charged by the federal government with conspiracy and more, arising from the countercultural protests in Chicago at the 1968 Democratic National Convention. The trial transfixed the nation and sparked a conversation about mayhem intended to undermine the U.S. government.",
  },
  {
    rotten: "85%",
    title: "News of the World",
    director: "Paul Greengrass",
    producers: "Gary Goetzman, Gail Mutrux and Gregory Goodman",
    synopsis:
      "Five years after the end of the Civil War, Capt. Jefferson Kyle Kidd crosses paths with a 10-year-old girl taken by the Kiowa people. Forced to return to her aunt and uncle, Kidd agrees to escort the child across the harsh and unforgiving plains of Texas. However, the long journey soon turns into a fight for survival as the traveling companions encounter danger at every turn -- both human and natural.",
  },
  {
    rotten: "84%",
    title: "Ma Rainey's Black Bottom",
    director: "George C. Wolfe",
    producers: "Denzel Washington, Todd Black and Dany Wolf",
    synopsis:
      "Tensions rise when trailblazing blues singer Ma Rainey and her band gather at a recording studio in Chicago in 1927.",
  },
  {
    rotten: "70%",
    title: "Tenet",
    director: "Christopher Nolan",
    producers: "Emma Thomas and Christopher Nolan",
    synopsis:
      "A secret agent is given a single word as his weapon and sent to prevent the onset of World War III. He must travel through time and bend the laws of nature in order to be successful in his mission.",
  },
  {
    rotten: "79%",
    title: "Greyhound",
    director: "Aaron Schneider",
    producers: "Gary Goetzman",
    synopsis:
      "U.S. Navy Cmdr. Ernest Krause is assigned to lead an Allied convoy across the Atlantic during World War II. His convoy, however, is pursued by German U-boats. Although this is Krause's first wartime mission, he finds himself embroiled in what would come to be known as the longest, largest and most complex naval battle in history: The Battle of the Atlantic.",
  },
  {
    rotten: "95%",
    title: "Soul",
    director: "Pete Docter and Kemp Powers",
    producers: "Dana Murray",
    synopsis:
      "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz -- and he's good. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.",
  },
];

const categories = [
  { name: "Best Picture" },
  { name: "Cinematography" },
  { name: "Production Design" },
  { name: "Writing (Original Screenplay)" },
  { name: "Sound" },
  { name: "Film Editing" },
];

const Movie = conn.define("movie", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  rotten: {
    type: STRING,
  },
  title: {
    type: STRING,
  },
  director: {
    type: STRING,
  },
  producers: {
    type: STRING,
  },
  synopsis: {
    type: TEXT,
  },
});

const Category = conn.define("category", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
  },
});

Category.belongsToMany(Movie, { through: "Nominations" });
Movie.belongsToMany(Category, { through: "Nominations" });

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  const [
    Nomadland,
    The_Father,
    Judas_and_the_Black_Messiah,
    Mank,
    Minari,
    Promising_Young_Woman,
    Sound_of_Metal,
    The_Trial_of_the_Chicago_7,
    News_of_the_World,
    Ma_Raineys_Black_Bottom,
    Tenet,
    Greyhound,
    Soul,
  ] = await Promise.all(movies.map((movie) => Movie.create(movie)));

  const [
    Best_Picture,
    Cinematography,
    Production_Design,
    Original_Screenplay,
    Sound,
    Film_Editing,
  ] = await Promise.all(
    categories.map((category) => Category.create(category))
  );

  await Promise.all([
    Best_Picture.addMovies([
      Nomadland,
      The_Father,
      Judas_and_the_Black_Messiah,
      Mank,
      Minari,
      Promising_Young_Woman,
      Sound_of_Metal,
      The_Trial_of_the_Chicago_7,
    ]),
    Cinematography.addMovies([
      Mank,
      Judas_and_the_Black_Messiah,
      News_of_the_World,
      Nomadland,
      The_Trial_of_the_Chicago_7,
    ]),
    Production_Design.addMovies([
      Mank,
      The_Father,
      Ma_Raineys_Black_Bottom,
      News_of_the_World,
      Tenet,
    ]),
    Original_Screenplay.addMovies([
      Promising_Young_Woman,
      Judas_and_the_Black_Messiah,
      Minari,
      Sound_of_Metal,
      The_Trial_of_the_Chicago_7,
    ]),
    Sound.addMovies([Sound_of_Metal, Greyhound, Mank, News_of_the_World, Soul]),
    Film_Editing.addMovies([
      Sound_of_Metal,
      The_Father,
      Nomadland,
      Promising_Young_Woman,
      The_Trial_of_the_Chicago_7,
    ]),
  ]);
};

module.exports = {
  conn,
  syncAndSeed,
  models: {
    Movie,
    Category,
  },
};
