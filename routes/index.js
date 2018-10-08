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
    console.log(req.session.cart);
    res.redirect('/');
  });
});

router.get('/remove-from-cart/:id', function(req, res) {
  let query = {
    _id: req.params.id
  }
  var cart = new Cart(req.session.cart.items); 
  Product.findById(req.params.id, function(err, product) {
    Product.remove(query, function(err) {
      if (err) {
        console.log(err);
      }
      cart.remove(req.params.id);
      res.redirect('/cart/');
    })
  })
})

router.get('/checkout', function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/cart');
  }
  var cart = new Cart(req.session.cart.items);
  res.render('shop/epayment', { products: cart.generateArray(), totalPrice: cart.totalPrice })

});

router.get('/cart', function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping_cart', { products: null });
  }
  var cart = new Cart(req.session.cart.items);
  res.render('shop/shopping_cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.get('/shop', function(req, res) {
  res.render('shop/shop')
});

router.get('/cart', function(req, res) {
  res.render('shop/shopping_cart')
});

module.exports = router;
