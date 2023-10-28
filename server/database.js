const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false, // Necessary for ElephantSQL
  },
});

// Test the database connection
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query: ', text);
    return pool.query(text, params, callback);
  },
};
