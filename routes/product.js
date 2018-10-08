var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart')

router.get('/:id', function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            console.log(err);
        } else {
            res.render('shop/product', { product: product });
        }
    })
});

router.get('/add-to-cart/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart.items : {});
  
    Product.findById(productId, function (err, product) {
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/:id');
    });
});

module.exports = router;