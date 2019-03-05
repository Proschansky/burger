CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(255) NOT NULL,
	isEaten BOOLEAN NOT NULL DEFAULT 0,
	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burgerName) VALUES ('Bacon Cheeseburger');
INSERT INTO burgers (burgerName) VALUES ('Maui Waui Burger');
INSERT INTO burgers (burgerName) VALUES ('Black and Blue Burger');