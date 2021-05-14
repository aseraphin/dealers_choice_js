const data = [
  {
    id: 1,
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
    id: 2,
    rotten: "98%",
    title: "The Father",
    director: "Florian Zeller",
    producers: "David Parfitt, Jean-Louis Livi and Philippe Carcassonne",
    synopsis:
      "Anthony is 80, mischievous, living defiantly alone and rejecting the carers that his daughter, Anne, encouragingly introduces. Yet help is also becoming a necessity for Anne; she can't make daily visits anymore and Anthony's grip on reality is unravelling. As we experience the ebb and flow of his memory, how much of his own identity and past can Anthony cling to? How does Anne cope as she grieves the loss of her father, while he still lives and breathes before her? THE FATHER warmly embraces real life, through loving reflection upon the vibrant human condition; heart-breaking and uncompromisingly poignant - a movie that nestles in the truth of our own lives.",
    result: "NOMINEES",
  },
  {
    id: 3,
    rotten: "96%",
    title: "Judas and the Black Messiah",
    director: "Shaka King",
    producers: "Shaka King, Charles D. King and Ryan Coogler",
    synopsis:
      "Offered a plea deal by the FBI, William O'Neal infiltrates the Illinois chapter of the Black Panther Party to gather intelligence on Chairman Fred Hampton.",
  },
  {
    id: 4,
    rotten: "83%",
    title: "Mank",
    director: "David Fincher",
    producers: "Ceán Chaffin, Eric Roth and Douglas Urbanski",
    synopsis:
      "1930s Hollywood is reevaluated through the eyes of scathing wit and alcoholic screenwriter Herman J. Mankiewicz as he races to finish 'Citizen Kane.'",
  },
  {
    id: 5,
    rotten: "98%",
    title: "Minari",
    director: "Lee Isaac Chung",
    producers: "Christina Oh",
    synopsis:
      "A Korean American family moves to an Arkansas farm in search of its own American dream. Amidst the challenges of this new life in the strange and rugged Ozarks, they discover the undeniable resilience of family and what really makes a home.",
  },
  {
    id: 6,
    rotten: "90%",
    title: "Promising Young Woman",
    director: "Emerald Fennell",
    producers: "Ben Browning, Ashley Fox, Emerald Fennell and Josey McNamara",
    synopsis:
      "Nothing in Cassie's life is what it appears to be -- she's wickedly smart, tantalizingly cunning, and she's living a secret double life by night. Now, an unexpected encounter is about to give Cassie a chance to right the wrongs from the past.",
  },
  {
    id: 7,
    rotten: "97%",
    title: "Sound of Metal",
    director: "Darius Marder",
    producers: "Bert Hamelinck and Sacha Ben Harroche, Producers",
    synopsis:
      "A heavy-metal drummer's life is thrown into freefall when he begins to lose his hearing.",
  },
  {
    id: 8,
    rotten: "92%",
    title: "The Trial of the Chicago 7",
    director: "Aaron Sorkin",
    producers: "Marc Platt and Stuart Besser",
    synopsis:
      "The film is based on the infamous 1969 trial of seven defendants charged by the federal government with conspiracy and more, arising from the countercultural protests in Chicago at the 1968 Democratic National Convention. The trial transfixed the nation and sparked a conversation about mayhem intended to undermine the U.S. government.",
  },
];

const list = () => {
  return [...data];
};

const find = (id) => {
  const movie = data.find((movie) => movie.id === +id);
  return { ...movie };
};

module.exports = { list: list, find: find };
