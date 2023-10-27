import { sql } from '@vercel/postgres';

const watchlistController = {};

watchlistController.getWatchlist = async (req, res, next) => {
  try {
    const { rows } = await sql`
      SELECT * FROM watchlist
      WHERE user_id = ${req.params.id};
    `;

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
  try {
    const { user_id, event_id } = req.body;

    const { rows } = sql`
      INSERT INTO watchlist (event_id, user_id)
      VALUES (${event_id}, ${user_id})
      RETURNING *`;

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
