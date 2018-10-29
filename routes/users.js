var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

// for test.
router.get('/profile', isLoggedIn, function (req, res, next) {
  res.render('user/profile');
});

router.get('/logout', isLoggedIn, function (req, res, next) {
  req.session.user = null;
  req.logout();
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
