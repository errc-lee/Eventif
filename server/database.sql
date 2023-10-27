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
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE user_sessions (
    session_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    cookie_id INTEGER UNIQUE
);

CREATE TABLE watchlist (
    watchlist_id SERIAL PRIMARY KEY,
    event_id INTEGER,
    user_id INTEGER REFERENCES users,
    UNIQUE (event_id, user_id)
);

-- Test Data
-- INSERT INTO users (email, username, password)
-- VALUES ('test@gmail.com', 'test123', 'password123');

-- INSERT INTO watchlist (event_id, user_id)
-- VALUES (420, 1);

-- INSERT INTO user_sessions (user_id)
-- VALUES (1);
