const db = require('../models/userModel');

const watchlistController = {};

// CREATE TABLE watchlist (
//   watchlist_id SERIAL PRIMARY KEY,
//   event_id INTEGER,
//   user_id INTEGER REFERENCES users
// );

watchlistController.getWatchlist = async (req, res, next) => {
  console.log('TRYING TO GET USERS WATCHLIST!!', req.params.id);
  try {
    const watchlistQ = `
    SELECT * FROM watchlist
    WHERE user_id = $1;
    `;

    const { rows } = await db.query(watchlistQ, [req.params.id]);
    res.locals.watchlist = rows;
    return next();
  } catch (err) {
    return next({
      log: `Error in watchlistController.getWatchlist, ERROR: ${err} `,
      message: { err: 'Error getting watchlist for user from DB' },
    });
  }
};

watchlistController.addWatchlist = async (req, res, next) => {
  console.log('TRYING TO ADD EVENT TO USERS WATCHLIST!!', req.body);
  try {
    const { user_id, event_id } = req.body;
    const addQ = `
      INSERT INTO watchlist (event_id, user_id)
      VALUES ($1, $2)
      RETURNING *`;

    const { rows } = await db.query(addQ, [event_id, user_id]);
    res.locals.added = rows;
    console.log('Successfullly added item to watchlist');
    return next();
  } catch (err) {
    return next({
      log: `Error in watchlistController.addWatchList, ERROR: ${err} `,
      message: { err: 'Error adding watchlist for user to DB' },
    });
  }
};

module.exports = watchlistController;
