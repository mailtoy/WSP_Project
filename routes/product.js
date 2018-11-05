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

router.get('/:department/page/:page', function (req, res, next) {
    var perPage = 6
    var page = req.params.page || 1
    var department = []
    Product
        .find(function(err, products) {
            products.forEach(function(product) {
                if (req.params.department == product.department.toLowerCase()) {
                    department.push(product)
                }
            })
        })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, products) {
            Product.count().exec(function (err, count) {
                if (err) return next(err)
                res.render('shop/shop', {
                    title: 'Dalessio',
                    products: department,
                    pagination: {
                    page: page,       // The current page the user is on
                    pageCount: Math.ceil(count / perPage)  // The total number of available pages
                }
            })
        })
    })
});

module.exports = router;