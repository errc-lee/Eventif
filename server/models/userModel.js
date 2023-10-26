const { Pool } = require('pg');

const pool = new Pool({
  connectionString: import.meta.env.POSTGRES_URL,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query: ', text);
    return pool.query(text, params, callback);
  },
};
