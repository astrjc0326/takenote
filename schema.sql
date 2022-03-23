DROP DATABASE IF EXISTS takenote;

CREATE DATABASE takenote;

USE takenote;

CREATE TABLE notes (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  tagline varchar(255) NOT NULL,
  note varchar(1024) NOT NULL,
  status ENUM('None', 'Hidden', 'Starred') NOT NULL,
  PRIMARY KEY (id)
);


INSERT into notes (title, category, tagline, note) VALUES ("Pet Moose of Tycho Brahe", "History", "A moose that was the pet of Tycho Brahe.", "Danish astronomer, alchemist, and nobleman Tycho Brahe had a pet moose that died when it drank too much beer and fell down a flight of stairs.");

