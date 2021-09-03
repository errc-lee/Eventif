const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const watchlistController = require('../controllers/watchlistController');
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

userRouter.get('/watchlist/:id',
  watchlistController.getWatchlist,
  (req, res) => {
    return res.json(res.locals.watchlist)
  });

userRouter.post('/watchlist',
  watchlistController.addWatchlist,
  (req, res) => {
    return res.json(res.locals.added)
  });

module.exports = userRouter;
