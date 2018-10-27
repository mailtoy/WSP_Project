var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart')

var paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AVKlhTfuerwmIg9gE6GD-pI43kbE99kjAGhya9JEhcLZLWFAx2zp7eDelPVz69zm-QWum54d5cbVzhmO',
  'client_secret': 'ENRaUrS2gr7HPEkYwyZcZkLq9rnNeYXYDOb0uFb7P5Oa2O8XZz7ptKsMCPslsO2UWlDGoWIpuCV2S0kz'
});

/* GET home page. */
router.get('/', function (req, res) {
  res.render('shop/home', { title: 'Dlaessio' })
});

router.get('/add-to-cart-qty/:id/:qty', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart.items : {});

  Product.findById(productId, function (err, product) {
    cart.addByQty(product, product.id, req.params.qty);
    req.session.cart = cart;
    res.send('Added!')
  });
});

router.get('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart.items : {});

  Product.findById(productId, function (err, product) {
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/');
  });
});

router.get('/remove-from-cart/:id', function (req, res) {
  let query = {
    _id: req.params.id
  }
  var cart = new Cart(req.session.cart.items);
  Product.findById(req.params.id, function (err, product) {
    Product.remove(query, function (err) {
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

  console.log(req.session.cart)
  if (!req.session.cart) {
    return res.render('shop/shopping_cart', { products: null });
  }
  var cart = new Cart(req.session.cart.items);
  res.render('shop/shopping_cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
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
    var cart = new Cart(req.session.cart.items);
    res.render('shop/epayment', {
      messages: messages, hasErrors: messages.length > 0,
      products: cart.generateArray(), totalPrice: cart.totalPrice
    })
  }
});

router.post('/checkout-paypal', function (req, res, next) {
  var cart = new Cart(req.session.cart.items);
  var items = cart.generateArray()
  var items_json = [];
  // invoke paypal rest api 
  for (var i = 0; i < items.length; i++) {
    items_json.push({
      name: items[i].item.title,
      sku: "LEV-JN-SL-32-BL",
      price: items[i].item.price,
      currency: "USD",
      quantity: items[i].qty
    })
  }
  var create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "item_list": {
        "items":
          items_json
      },
      "amount": {
        "currency": "USD",
        "total": cart.totalPrice
      },
      "description": "This is the payment description."
    }]
  };
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

router.get('/success', (req, res) => {

  var paymentId = req.query.paymentId;
  var payerId = { payer_id: req.query.PayerID };

  paypal.payment.execute(paymentId, payerId, function (error, payment) {
    if (error) {
      console.error(JSON.stringify(error));
    } else {
      if (payment.state == 'approved') {
        console.log('payment completed successfully');
        res.redirect('/');
        // redirect to order page.
      } else {
        console.log('payment not successful');
        var cart = new Cart(req.session.cart.items);
        res.render('shop/epayment', {
          messages: "payment not successful.", hasErrors: messages.length > 0,
          products: cart.generateArray(), totalPrice: cart.totalPrice
        })
      }
    }
  });
});

router.get('/cancel', (req, res) => res.send('Cancelled'));

router.get('/shop', function (req, res) {
  Product.find(function (err, docs) {
    res.render('shop/shop', { title: 'Dlaessio', products: docs });
  });
});

router.get('/cart', function (req, res) {
  res.render('shop/shopping_cart')
});

module.exports = router;