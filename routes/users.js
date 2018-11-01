var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var User = require('../models/user');

var csrfProtection = csrf();
router.use(csrfProtection);

// Edit profile
router.get('/profile', isLoggedIn, function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/profile', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0,
    title: 'User Profile | Dlaessio'
  });
});

router.post('/profile', function (req, res, next) {
  var updUser = new User(req.session.user ? req.session.user : {});
  updUser.firstName = req.body.firstName;
  updUser.lastName = req.body.lastName;
  updUser.address = req.body.address;
  updUser.city = req.body.city;
  updUser.state = req.body.state;
  updUser.zip = req.body.zip;
  User.update({ _id: req.session.user.id }, updUser, function (err, done) {
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

// Login 
router.get('/login', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/login', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0,
    title: 'Login | Dlaessio'
  })
});

router.post('/login', passport.authenticate('local.signin', {
  failureRedirect: '/user/login',
  failureFlash: true
}), function (req, res, next) {
  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    res.redirect('/user/profile');
  }
});


// Register Form
router.get('/register', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/regis', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0,
    title: 'Register | Dlaessio'
  })
});

// Register Process
router.post('/register', passport.authenticate('local.signup', {
  successRedirect: '/user/login',
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
