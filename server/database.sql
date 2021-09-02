-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;

CREATE TABLE users (

    user_id SERIAL PRIMARY KEY,
    email TEXT UNIQUE,
    username TEXT UNIQUE,
    pw TEXT
);

CREATE TABLE user_sessions (
    session_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users
);

CREATE TABLE watchlist (
    watchlist_id SERIAL PRIMARY KEY,
    event_id INTEGER,
    user_id INTEGER REFERENCES users
);
-- Test Data
INSERT INTO users (email, username, pw)
VALUES ('test@gmail.com', 'test123', 'password321');

INSERT INTO watchlist (event_id, user_id)
VALUES (420, 1);

INSERT INTO user_sessions (user_id)
VALUES (1);
