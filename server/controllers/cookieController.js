const db = require('../models/userModel');
const express = require('express');
const cookieParser = require('cookie-parser');

const cookieController = {};

cookieController.setCookie = async (req, res, next) => {
  try {
    return next();
  }
  catch (err) {
    return next({log: 'error with cookieController.createCookie'});
  }
};

cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    return next();
  }
  catch (err) {
    return next({log: 'error with cookieController.setSSIDCookie'});
  }
};

module.exports = cookieController;