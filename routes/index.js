var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection)

/* GET home page. */
router.get('/', function (req, res) {
  Product.find(function (err, docs) {
    res.render('shop/index', { title: 'Shopping Cart', products: docs });
  });
});

// for test only.
router.get('/user/signup', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 })
});

// for test only.
router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureFlash: true,
  failureRedirect: '/user/signup'
}));

router.get('/user/profile', function (req, res, next) {
  res.render('user/profile');
});


// for mai's layouts
router.get('/user/signin', function (req, res, next) {
  res.render('user/login');
});

router.get('/user/register', function (req, res, next) {
  res.render('user/regis');
});

module.exports = router;
