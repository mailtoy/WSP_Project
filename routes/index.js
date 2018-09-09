var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart')

/* GET home page. */
router.get('/', function (req, res) {
  Product.find(function (err, docs) {
    res.render('shop/index', { title: 'Shopping Cart', products: docs });
  });
});

router.get('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart.items : {});

  Product.findById(productId, function (err, product) {
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/');
  });
});

router.get('/mycart', function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/cart', { products: null });
  }
  var cart = new Cart(req.session.cart.items);
  res.render('shop/cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

module.exports = router;
