
DROP DATABASE fixtures;
CREATE DATABASE fixtures;

USE fixtures;


CREATE TABLE fixturesTable (
  id INTEGER NOT NULL AUTO_INCREMENT,
  part VARCHAR(50),
  price INTEGER(50) NOT NULL,
  UNIQUE KEY(part),
  PRIMARY KEY (id)
);
