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
      res.redirect('/mycart/');
    })
  })
})

router.get('/checkout', function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/mycart');
  }
  var cart = new Cart(req.session.cart.items);
  res.render('shop/epayment', { products: cart.generateArray(), totalPrice: cart.totalPrice })

});

router.get('/mycart', function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/cart', { products: null });
  }
  var cart = new Cart(req.session.cart.items);
  res.render('shop/cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.post('/checkout', function (req, res, next) {
  const firstName = req.body.fname;
  const email = req.body.email;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const cardName = req.body.cname;
  const cardNumber = req.body.ccnum;
  const expMonth = req.body.expmonth;
  const expYear = req.body.expyear;
  const cvv = req.body.cvv;
  req.checkBody('firstName', 'First name is required').notEmpty();
  req.checkBody('email', 'Invalid Email').notEmpty().isEmail();
  req.checkBody('address', 'Address is required').notEmpty();
  req.checkBody('city', 'City is required').notEmpty();
  req.checkBody('state', 'State is required').notEmpty();
  req.checkBody('zip', 'Zip is required').notEmpty();
  req.checkBody('cardName', 'Card name is required').notEmpty();
  req.checkBody('cardNumber', 'Card number is required').notEmpty();
  req.checkBody('expMonth', 'Exp Month is required').notEmpty();
  req.checkBody('expYear', 'Exp Year is required').notEmpty();
  req.checkBody('cvv', 'CVV is required').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
      var messages = [];
      errors.forEach(function (error) {
          messages.push(error.msg);
      });

      if (!req.session.cart) {
        return res.redirect('/mycart');
      }
      var cart = new Cart(req.session.cart.items);
      res.render('shop/epayment', { messages: messages, hasErrors: messages.length > 0,
                                    products: cart.generateArray(), totalPrice: cart.totalPrice })
  }
});

router.get('/shop', function(req, res) {
  res.render('shop/shop')
});

router.get('/home', function(req, res) {
  res.render('shop/home')
});

router.get('/cart', function(req, res) {
  res.render('shop/shopping_cart')
});

module.exports = router;
