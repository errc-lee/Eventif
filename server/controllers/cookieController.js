const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('../database');

const app = express();
// app.use(cookieParser());

const cookieController = {};

// Setting a cookie on the user's browser
cookieController.setCookie = (req, res, next) => {
  try {
    const uniqueNum = Math.round(Math.random() * 100);
    res.cookie('session', uniqueNum);
    return next();
  } catch (err) {
    return next({
      log: `error with cookieController.createCookie ERROR: ${err}`,
      message: { err: 'error setting cookies' },
    });
  }
};

// Setting the session id to the aforementioned cookie's value
cookieController.setSSIDCookie = (req, res, next) => {
  try {
    return next();
  } catch (err) {
    return next({
      log: `error with cookieController.setSSIDCookie ERROR: ${err}`,
      message: { err: 'error setting SSID cookie' },
    });
  }
};

module.exports = cookieController;
