var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var User = require('../models/user');

var csrfProtection = csrf();
router.use(csrfProtection);

// Edit profile for test.
router.get('/profile', isLoggedIn, function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/profile', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0,
    title: 'User Profile'
   });
});

router.post('/profile', function(req, res, next) {
  var updUser = new User(req.session.user ? req.session.user : {});
  updUser.firstName = req.body.firstName;
  updUser.lastName = req.body.lastName;
  updUser.address = req.body.address;
  updUser.city = req.body.city;
  updUser.state = req.body.state;
  updUser.zip = req.body.zip;
  User.update({ _id: req.session.user.id }, updUser, function(err, done) {
      if (err) {
          return console.log("err");
      } else {
          console.log("pass");
          req.session.user = updUser;
          res.render('user/profile');
      }
  })
})

router.get('/logout', isLoggedIn, function (req, res, next) {
  req.logout();
  req.session.user = null;
  res.redirect('/');
});

router.use('/', notLoggedIn, function (req, res, next) {
  next();
});

// Signin 
router.get('/signin', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/login', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 })
});

router.post('/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));


// Register Form
router.get('/register', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/regis', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 })
});

// Register Process
router.post('/register', passport.authenticate('local.signup', {
  successRedirect: '/user/signin',
  failureFlash: true,
  failureRedirect: '/user/register',
}));

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;
