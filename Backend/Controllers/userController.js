const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const userController = {};

// CREATE USER MIDDLEWARE - for creating a new user
userController.createUser = async (req, res, next) => {
  try {
    console.log('this is the body', req.body);
    const newUser = await User.create(req.body);
    console.log(newUser);
    return next();
  } catch (err) {
    console.log('error when signing up, please try again');
    return next({ error: err });
  }
};

// VERIFY USER MIDDLEWARE - for login purposes
userController.verifyUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({username: req.body.username}).exec()
    res.locals.userId = existingUser._id;
    console.log(existingUser);
    // compare password to database
    bcrypt.compare(req.body.password, existingUser.password, function(err, result) {
      if (result) {
        console.log('password is correct')
        return next();
      } else {
        console.log('username/password combo does not match');
        return next(err);
      }
    })

    } catch (err) {
      console.log('cannot find user');
    }
  };
    

    // if (existingUser.password === req.body.password) {
      // return next();
    // } else {
      // return res.render('/', 'sorry, username/password combo does not match')
    // }
  // } catch (err) {
    // return res.render('/', {error: err});
  //}


// export
module.exports = userController;