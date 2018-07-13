const User = require('../models/User.js');
const passport = require('passport');
const config = require('./../config/Config');
const Strategy = require('passport-facebook').Strategy;

module.exports.controller = (app) => {
  // facebook strategy
  passport.use(new Strategy({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: '/login/facebook/return',
    profileFields: ['id', 'displayName', 'email']
  },
  (accessToken, refreshToken, profile, cb) => {
    // Handle facebook login
  }));
};
