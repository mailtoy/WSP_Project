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

module.exports = router;