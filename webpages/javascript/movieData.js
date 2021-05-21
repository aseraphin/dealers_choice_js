const pg = require("pg");

const client = new pg.Client("postgres://localhost/dealers_choice_db");

const syncAndSeed = async () => {
  const SQL = `
    DROP TABLE IF EXISTS Movie;
    CREATE TABLE Movie(
      id INTEGER PRIMARY KEY,
      rotten VARCHAR(100) NOT NULL,
      title VARCHAR(254) UNIQUE NOT NULL,
      director VARCHAR(100) NOT NULL,
      producers TEXT NOT NULL,
      synopsis TEXT NOT NULL,
      result VARCHAR(100)
    );
    INSERT INTO Movie (id, rotten, title, director, producers, synopsis, result) VALUES(1,'94%','Nomadland', 'Chloe Zhao', 'Frances McDormand, Peter Spears, Mollye Asher, Dan Janvey and Chloé Zhao', 'A woman in her sixties who, after losing everything in the Great Recession, embarks on a journey through the American West, living as a van-dwelling modern-day nomad.', 'WINNER');
    INSERT INTO Movie (id, rotten, title, director, producers, synopsis, result) VALUES(2,'98%','The Father','Florian Zeller','David Parfitt, Jean-Louis Livi and Philippe Carcassonne','Anthony is 80, mischievous, living defiantly alone and rejecting the carers that his daughter, Anne, encouragingly introduces. Yet help is also becoming a necessity for Anne; she cant make daily visits anymore and Anthonys grip on reality is unravelling. As we experience the ebb and flow of his memory, how much of his own identity and past can Anthony cling to? How does Anne cope as she grieves the loss of her father, while he still lives and breathes before her? THE FATHER warmly embraces real life, through loving reflection upon the vibrant human condition; heart-breaking and uncompromisingly poignant - a movie that nestles in the truth of our own lives.','NOMINEES');
    INSERT INTO Movie (id, rotten, title, director, producers, synopsis, result) VALUES(3,'96%','Judas and the Black Messiah','Shaka King','Shaka King, Charles D. King and Ryan Coogler','Offered a plea deal by the FBI, William ONeal infiltrates the Illinois chapter of the Black Panther Party to gather intelligence on Chairman Fred Hampton.','');
    INSERT INTO Movie (id, rotten, title, director, producers, synopsis, result) VALUES(4,'83%','Mank','David Fincher','Ceán Chaffin, Eric Roth and Douglas Urbanski','1930s Hollywood is reevaluated through the eyes of scathing wit and alcoholic screenwriter Herman J. Mankiewicz as he races to finish Citizen Kane.','');
    INSERT INTO Movie (id, rotten, title, director, producers, synopsis, result) VALUES(5,'98%','Minari','Lee Isaac Chung','Christina Oh','A Korean American family moves to an Arkansas farm in search of its own American dream. Amidst the challenges of this new life in the strange and rugged Ozarks, they discover the undeniable resilience of family and what really makes a home.','');
    INSERT INTO Movie (id, rotten, title, director, producers, synopsis, result) VALUES(6,'90%','Promising Young Woman','Emerald Fennell','Ben Browning, Ashley Fox, Emerald Fennell and Josey McNamara','Nothing in Cassies life is what it appears to be -- shes wickedly smart, tantalizingly cunning, and shes living a secret double life by night. Now, an unexpected encounter is about to give Cassie a chance to right the wrongs from the past.','');
    INSERT INTO Movie (id, rotten, title, director, producers, synopsis, result) VALUES(7,'97%','Sound of Metal','Darius Marder','Bert Hamelinck and Sacha Ben Harroche, Producers','A heavy-metal drummers life is thrown into freefall when he begins to lose his hearing.','');
    INSERT INTO Movie (id, rotten, title, director, producers, synopsis, result) VALUES(8,'92%','The Trial of the Chicago 7','Aaron Sorkin','Marc Platt and Stuart Besser','The film is based on the infamous 1969 trial of seven defendants charged by the federal government with conspiracy and more, arising from the countercultural protests in Chicago at the 1968 Democratic National Convention. The trial transfixed the nation and sparked a conversation about mayhem intended to undermine the U.S. government.','');
  `;
  await client.query(SQL);
};

module.exports = {
  client,
  syncAndSeed,
};
