// Object destructure the Pool property from pg
const { Pool } = require('pg');

// Access our db hosted from ElephantSQL
const elephant_URI = 'postgres://kgpturay:ts7ckBae45NaQn9meVTMg7bHr9TT03NK@kashin.db.elephantsql.com/kgpturay';

// Create a pool for the connection URI
const pool = new Pool({
  connectionString: elephant_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query: ', text);
    return pool.query(text, params, callback);
  }
};
