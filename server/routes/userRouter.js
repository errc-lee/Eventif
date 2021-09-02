const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json({
    username: res.locals.username,
    email: res.locals.email,
  });
});

userRouter.get('/login', (req, res) => {
  return res.status(200).json({
    username: res.locals.username,
    email: res.locals.email,
  });
});

// userRouter.get('/', (req, res, next) => {
//   return next();
// });

// -------Copied from server.js

// app.post('/post', userController.createUser, (req, res) => {
//   res.status(200);
//   res.redirect('/client/Component/homepage.js');
// });

// app.post('/login', userController.verifyUser, (req, res) => {
//   return res.json('yes');
// });
// creating an account
// userRouter.get('/signup',(req, res) => {
// });

module.exports = userRouter;
