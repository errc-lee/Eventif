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
    RETURNING *`;
    const result = await db.query(userQ, [email, username, password]);
    res.locals.createdUser = { email, username };
    return next();
  } catch (err) {
    return next({
      log: `Error in userController.createUser when trying to create a user in DB: ERROR: ${err} `,
      message: { err: 'Error creating new user in DB' },
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
