CREATE DATABASE jwt_fastify_vue;

\d jwt_fastify_vue;

CREATE TABLE users(
    id serial,
    username varchar(1000),
    password varchar(2000)
);