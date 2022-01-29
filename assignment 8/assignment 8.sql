--Part A
--question 1
SELECT COUNT(*)
FROM actors
WHERE date_of_birth > '1970-01-01'
--q2
SELECT MAX(domestic_takings), MIN(domestic_takings)
FROM movie_revenues
--q3
SELECT SUM(movie_length)
FROM movies
WHERE age_certificate = '15'
--q4
SELECT COUNT(nationality) 
FROM directors
WHERE nationality = 'Japanese'
--q5
SELECT AVG(movie_length) 
FROM movies
WHERE movie_lang = 'Chinese'

--Part B
--question 1
SELECT nationality, COUNT(nationality) FROM directors
GROUP BY nationality
--question 2
SELECT age_certificate, movie_lang, SUM(movie_length) FROM movies
GROUP BY age_certificate, movie_lang
--question 3
SELECT movie_lang FROM movies
GROUP BY movie_lang
HAVING SUM(movie_length) > 500

--Part C
--q1
SELECT a.first_name, a.last_name
FROM movies_actors ma
JOIN actors a ON a.actor_id = ma.actor_id
JOIN movies mo ON mo.movie_id = ma.movie_id
JOIN directors d ON d.director_id = mo.director_id
WHERE d.first_name = 'Wes' AND d.last_name = 'Anderson'	   
--q2		   
SELECT first_name, last_name, date_of_birth, gender
FROM actors a1
WHERE date_of_birth = (
	SELECT MIN(date_of_birth) FROM actors a2
	WHERE a2.gender = a1.gender
)
--q3
SELECT movie_name, movie_length, age_certificate 
FROM movies m1
WHERE movie_length > (
	SELECT AVG(movie_length) FROM movies m2
	WHERE m1.age_certificate = m2.age_certificate
	
)





		   
		   
		   