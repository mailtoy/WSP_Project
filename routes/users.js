var express = require('express');
var router = express.Router();

var passport = require('passport');
var User = require('../models/user');
var Order = require('../models/order');
var Cart = require('../models/cart');


// Edit profile
router.get('/profile', isLoggedIn, function (req, res, next) {
  var messages = req.flash('error');
  Order.find({ user: req.user }, function (err, orders) {
    if (err) {
      return res.write('Error!');
    }
    var cart;
    orders.forEach(function (order) {
      var cart = new Cart(order.cart ? order.cart.items : {});

      order.items = cart.generateArray();
    });
    res.render('user/profile', {
      orders: orders,
      messages: messages,
      hasErrors: messages.length > 0,
      title: 'User Profile | Dlaessio'
    });
  });
  // var messages = req.flash('error');
  // res.render('user/profile', {
  //   messages: messages,
  //   hasErrors: messages.length > 0,
  //   title: 'User Profile | Dlaessio'
  // });
});

router.post('/profile', isLoggedIn, function (req, res, next) {
  var updUser = new User(req.session.user ? req.session.user : {});
  updUser.firstName = req.body.firstName;
  updUser.lastName = req.body.lastName;
  updUser.address = req.body.address;
  updUser.city = req.body.city;
  updUser.state = req.body.state;
  updUser.zip = req.body.zip;
  updUser.profilePic = req.body.profilePic;
  User.update({ _id: req.user.id }, updUser, function (err, done) {
    if (err) {
      return console.log("err");
    } else {
      console.log("pass");
      req.session.user = updUser;
      res.redirect('back');
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
