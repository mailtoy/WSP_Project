var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Order = require('../models/order');
var Cart = require('../models/cart')
var paypal = require('paypal-rest-sdk');
var filter = require('../modules/filter');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AVKlhTfuerwmIg9gE6GD-pI43kbE99kjAGhya9JEhcLZLWFAx2zp7eDelPVz69zm-QWum54d5cbVzhmO',
  'client_secret': 'ENRaUrS2gr7HPEkYwyZcZkLq9rnNeYXYDOb0uFb7P5Oa2O8XZz7ptKsMCPslsO2UWlDGoWIpuCV2S0kz'
});

/* GET home page. */
router.get('/', function (req, res) {
  var successMsg = req.flash('success')[0];
  res.render('shop/home', { title: 'Dalessio', successMsg: successMsg, noMessages: !successMsg });
})


router.get('/add-to-cart-qty/:id/:qty', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart.items : {});

  Product.findById(productId, function (err, product) {
    cart.addByQty(product, product.id, req.params.qty);
    req.session.cart = cart;
    res.send('Added!')
  });
});

router.post('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart.items : {});
  var color = req.body.color;
  var size = req.body.size;
  Product.findById(productId, function (err, product) {
    cart.add(product, product.id, color, size);
    req.session.cart = cart;
    res.redirect('back');
  });
});

router.get('/checkout', isLoggedIn, function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/cart');
  }
  var cart = new Cart(req.session.cart.items);
  var errMsg = req.flash('error')[0];
  res.render('shop/epayment', {
    title: 'Checkout | Dalessio',
    messages: errMsg, noError: !errMsg,
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  })
});

router.get('/cart', isLoggedIn, function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping_cart', { products: null });
  }
  var cart = new Cart(req.session.cart.items);
  console.log(cart.generateArray())
  res.render('shop/shopping_cart', {
    title: 'My Cart | Dalessio',
    products: cart.generateArray(), totalPrice: cart.totalPrice
  });
});

// checkout ธรรมดา
router.post('/checkout', function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart.items);

  var stripe = require("stripe")(
    "sk_test_TLBrJXM2JwhNMsyZZXJB6rFw"
  );
  console.log(req.body.stripeToken)


  stripe.charges.create({
    amount: cart.totalPrice,
    currency: "usd",
    source: req.body.stripeToken, // obtained with Stripe.js
    description: "Test Charge"
  }, function (err, charge) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/checkout');
    }
    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.firstname,
      paymentId: charge.id
    });
    order.save(function (err, result) {
      if (err) {
        console.log("err " + err);
      }
      req.flash('success', 'Successfully bought product!');
      req.session.cart = null;
      res.redirect('/');
    });
  });
}
);

router.post('/checkout-paypal', function (req, res, next) {
  var cart = new Cart(req.session.cart ? req.session.cart.items : {});
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
      "return_url": "/success",
      "cancel_url": "/cancel"
    },
    "transactions": [{
      "item_list": {
        "items":
          items_json,
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
  var cart = new Cart(req.session.cart ? req.session.cart.items : {});

  paypal.payment.execute(paymentId, payerId, function (error, payment) {
    if (error) {
      console.error(JSON.stringify(error));
    } else {
      var name = payment.transactions[0].item_list.shipping_address.recipient_name
      var address = payment.transactions[0].item_list.shipping_address.line1
        + " " + payment.transactions[0].item_list.shipping_address.line2
        + " " + payment.transactions[0].item_list.shipping_address.city
        + " " + payment.transactions[0].item_list.shipping_address.state
        + " " + payment.transactions[0].item_list.shipping_address.postal_code
        + " " + payment.transactions[0].item_list.shipping_address.country_code
      if (payment.state == 'approved') {
        console.log('payment completed successfully');
        var order = new Order({
          user: req.user,
          cart: cart,
          address: address,
          name: name,
          paymentId: paymentId
        });
        order.save(function (err, result) {
          if (err) {
            console.log("err " + err);
          }
          req.session.cart = null;
          res.redirect('/');
        });
      } else {
        console.log('payment not successful');
        req.flash('error', err.message);
        return res.redirect('/checkout');
      }
    }
  });
});

router.get('/page/:page', function (req, res, next) {
  var perPage = 6
  var page = req.params.page || 1
  var skip = (perPage * page) - perPage
  var limit = skip + perPage
  Product
    .find({})
    .exec(function (err, products) {
      if (req.query.filter)
        products = filter(req, res, products)
      res.render('shop/shop', {
        title: 'Dalessio',
        products: products.slice(skip, limit),
        pagination: {
          page: page,       // The current page the user is on
          pageCount: Math.ceil(products.length / perPage),  // The total number of available pages
          params: req.query.filter ? "?" + req.originalUrl.split('?')[1] : "",
        },
        filter: req.query.filter
      })
    })
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/login');
}

function filter(req, res, next) {
  var perPage = 6
  var page = req.params.page || 1

  // console.log("URL: " + "?" + req.originalUrl.split('?')[1]);

  if (req.query.filter) {
    var array = []
    // var checked_box = {}
    var numberOfMatching = 0;
    for (var i in req.query.filter) {
      for (var j in req.query.filter[i])
        numberOfMatching++
      // checked_box[req.query.filter[i][j]] = true
    }
    Product.find({}, function (err, product) {
      for (var index in product) {
        var count = 0
        for (var quary_key in req.query.filter) {
          if (typeof product[index][quary_key] === 'object' && product[index][quary_key][req.query.filter[quary_key]] !== undefined) {
            count++
          } else {
            if (req.query.filter[quary_key].includes(product[index][quary_key])) {
              count++
            }
          }
        }
        if (count == numberOfMatching)
          array.push(product[index])
      }
      var skip = (perPage * page) - perPage
      var limit = skip + perPage
      if (err) return next(err)
      res.render('shop/shop', {
        title: 'Dalessio',
        products: array.slice(skip, limit),
        pagination: {
          page: page, // The current page the user is on
          pageCount: Math.ceil(array.length / perPage),  // The total number of available pages
          params: "?" + req.originalUrl.split('?')[1].toString()
        },
        filter: req.query.filter
      })
    });
  }
  else
    next();
}

