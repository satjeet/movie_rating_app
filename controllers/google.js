const User = require('../models/User');
const passport = require('passport');
const config = require('./../config/Config');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports.controller = (app) => {
  // google strategy
  passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_APP_ID,
    clientSecret: config.GOOGLE_APP_SECRET,
    callbackURL: '/login/google/return',
  },
  (accessToken, refreshToken, profile, cb) => {
      const email = profile.emails[0].value;
      User.getUserByEmail(email, (err, user) => {
        if (!user) {
          const newUser = new User({
            fullname: profile.displayName,
            email,
            facebookId: profile.id,
          });
          User.createUser(newUser, (error) => {
            if (error) {
              // Handle error
            }
            return cb(null, user);
          });
        } else {
          return cb(null, user);
        }
        return true;
      });
    }));

    app.get('/login/google',
      passport.authenticate('google', { scope: ['email'] }));

    app.get('/login/google/return',
      passport.authenticate('google', { failureRedirect: '/login' }),
      (req, res) => {
        res.redirect('/');
      });
  };
