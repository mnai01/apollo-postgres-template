CREATE DATABASE apollo_template;

\connect apollo_template;

CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name varchar,
    age smallint,
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE USER user_name WITH UNENCRYPTED PASSWORD 'password';

