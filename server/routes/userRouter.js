const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

const userRouter = express.Router();

userRouter.post('/signup',
  userController.createUser,
  (req, res) => {
    return res.status(200).json(res.locals.createdUser);
  });

userRouter.post('/login',
  userController.login,
  cookieController.setCookie,
  (req, res) => {
    return res.json(res.locals.userInfo);
  });


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
