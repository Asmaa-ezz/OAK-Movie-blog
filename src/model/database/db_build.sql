BEGIN;

DROP TABLE IF EXISTS users ,reviews CASCADE;

CREATE TABLE users (id SERIAL PRIMARY KEY ,
    username VARCHAR(30) UNIQUE ,
    email VARCHAR(100) UNIQUE ,password VARCHAR);


CREATE TABLE reviews (id SERIAL PRIMARY KEY ,
    content TEXT , 
    user_id INTEGER REFERENCES users(id) ,
    movie_id integer unique);

INSERT INTO users (username,email,password) VALUES ('ahmed','ahmed@ahmed.com','$2a$10$h.phrfM.Iwj0W0xPbhxrNuJ4vPaSPGpNioTJdkHpt5X/EvBxf3Qae');
INSERT INTO users (username,email,password) VALUES ('hassan','hassan@hassan.com','1234564789Q');

COMMIT;