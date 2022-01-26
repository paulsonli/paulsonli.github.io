CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	gender CHAR(1),
	date_of_birth DATE
);

SELECT * FROM actors;

CREATE TABLE directors (
	director_id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	date_of_birth DATE,
	nationality VARCHAR (20)
)


SELECT * FROM directors;

CREATE TABLE movies (
	movie_id SERIAL PRIMARY KEY,
	movie_name VARCHAR(50),
	movie_length INT,
	movie_lang VARCHAR(20),
	release_date DATE,
	age_certificate VARCHAR(5),
	director_id INT REFERENCES directors(director_id)
)

CREATE TABLE movie_revenues (
	revenue_id SERIAL,
	movie_id INT REFERENCES movies(movie_id) ,
	domestic_takings NUMERIC(6,2),
	international_takings NUMERIC(6,2)
)

CREATE TABLE movies_actors (
	movie_id INT REFERENCES movies (movie_id),
	actor_id INT REFERENCES actors (actor_id),
	PRIMARY KEY (movie_id, actor_id)
)

SELECT * FROM actors
SELECT * FROM directors
SELECT * FROM movie_revenues
SELECT * FROM movies
SELECT * FROM movies_actors

select count(*) from directors
union all
select count(*) from actors
union all
select count(*) from movies
union all
select count(*) from movie_revenues
union all
select count(*) from movies_actors

SELECT first_name, last_name, date_of_birth FROM actors
WHERE first_name LIKE 'J%' AND last_name LIKE 'A%' OR last_name LIKE 'H%'