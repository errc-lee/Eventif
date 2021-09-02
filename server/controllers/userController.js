const db = require('../models/userModel');

const userController = {};

// for Pool aka DB queries, keep in mind this syntax: pool.query(text, params, callback)

// CREATE USER MIDDLEWARE - for creating a new user
userController.createUser = async (req, res, next) => {
  console.log('trying to create user', req.body);

  // Need to handle case where username/email is already in database???
  try {
    const { email, username, password } = req.body;
    const userQ = `
      INSERT INTO users (email, username, pw)
      VALUES ($1, $2, $3)
      RETURNING user_id, email, username`;
    const result = await db.query(userQ, [email, username, password]);
    res.locals.createdUser = result.rows[0];
    return next();
  }
  catch (err) {
    return next({
      log: `Error in userController.createUser, ERROR: ${err} `,
      message: { err: 'Error creating new user in DB' },
    });
  }
};
// for Pool aka DB queries, keep in mind this syntax: pool.query(text, params, callback)
userController.login = async (req, res, next) => {
  try {
    // Get a req that has a user email and a password
    // Query the database, to see if the email has a matching password
    // If yes send 200
    // If password does not match send error(403: Forbidden)
    const { email, password } = req.body;
    const data = [email, password];
    const queryString = `
      SELECT user_id, email, username
      FROM users
      WHERE email = $1 AND pw = $2;`;
    const result = await db.query(queryString, data);

    // Check if there exists email in database
    if (!result.rows.length) {
      res.status(403);
    } else {
      res.locals.userInfo = result.rows[0];
      res.status(200);
    }
    return next();
  }
  catch (err) {
    return next({
      log: `Error in userController.login, ERROR: ${err} `,
      message: { err: 'Error logging in' },
    });

  }
};
// VERIFY USER MIDDLEWARE - for login purposes
// userController.verifyUser = async (req, res, next) => {
//   try {
//     const existingUser = await User.findOne({username: req.body.username}).exec()
//     res.locals.userId = existingUser._id;
//     // compare password to database
//     bcrypt.compare(req.body.password, existingUser.password, function(err, result) {
//       if (result) {
//         console.log('password is correct')
//         return next();
//       } else {
//         console.log('username/password combo does not match');
//         return next(err);
// }
// });
//   } catch (err) {
//     console.log('cannot find user');
//   }
// };

// if (existingUser.password === req.body.password) {
// return next();
// } else {
// return res.render('/', 'sorry, username/password combo does not match')
// }
// } catch (err) {
// return res.render('/', {error: err});
// }

// export
module.exports = userController;
