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

SELECT * FROM movies
WHERE movie_name LIKE 'Spider%'

SELECT * FROM movies
-- Where age_certificate IN ('12', '11', 'PG') 
WHERE
movie_length > 80 
AND movie_lang 
IN ('Chinese' , 'English', 'Korean', 'German') --NOT IN




-- PRACTICE
SELECT * FROM movies 
WHERE release_date > '2000-01-01'

--assignment part 1
SELECT movie_name, release_date FROM movies

SELECT first_name, last_name FROM directors
WHERE nationality = 'American'

SELECT * FROM actors
WHERE gender = 'M'
AND date_of_birth > '1970-01-01'

SELECT movie_name FROM movies
WHERE movie_length > 90
AND movie_lang = 'English' --AND movie_lang LIKE '%lish'

SELECT * FROM actors
WHERE gender = 'M'
AND date_of_birth BETWEEN '1970-01-01' AND '1990-01-01'

SELECT first_name, last_name FROM actors
WHERE first_name like 'Jo%'
ORDER BY last_name, first_name

SELECT domestic_takings, international_takings FROM movie_revenues
WHERE domestic_takings > 0 and international_takings > 0 --WHERE domestic_takings IS NOT NULL
ORDER BY domestic_takings DESC
-- LIMIT 3

-- assignment part 2

SELECT movie_name, movie_lang FROM movies
WHERE movie_lang IN ('English', 'Spanish', 'Korean')

SELECT first_name, last_name FROM actors
WHERE last_name LIKE 'M%'
AND date_of_birth BETWEEN '1940-01-01' AND '1969-12-31'

SELECT first_name, last_name FROM directors 
WHERE nationality IN ('British', 'French', 'German')
AND date_of_birth BETWEEN '1950-01-01' AND '1980-12-31'


-- assignment part 3
SELECT * FROM directors
ORDER BY date_of_birth

SELECT DISTINCT nationality FROM directors

SELECT first_name, last_name, date_of_birth FROM actors
WHERE gender = 'F'
ORDER BY date_of_birth DESC
LIMIT 10

