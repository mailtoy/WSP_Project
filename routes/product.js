var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart')

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

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
    var department = req.params.department;
    Product
        .find({ department: department })
        .limit(perPage)
        .exec(function (err, products) {
            Product.count().exec(function (err, count) {
                if (err) return next(err)
                res.render('shop/shop', {
                    title: department.toUpperCase() + ' | Dalessio',
                    products: products,
                    pagination: {
                    page: page,       // The current page the user is on
                    pageCount: Math.ceil(count / perPage)  // The total number of available pages
                }
            })
        })
    })
});

router.get('/:department/:category/page/:page', function (req, res, next) {
    var perPage = 6
    var page = req.params.page || 1
    var department = req.params.department;
    var category = req.params.category;
    Product
        .find({ department: department, category: category })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, products) {
            Product.count().exec(function (err, count) {
                console.log(req.params.department)
                console.log(req.params.category)
                if (err) return next(err)
                res.render('shop/shop', {
                    title: category.capitalize() + ' - '+ department.toUpperCase() + ' | Dalessio',
                    products: products,
                    pagination: {
                    page: page,       // The current page the user is on
                    pageCount: Math.ceil(count / perPage)  // The total number of available pages
                }
            })
        })
    })
});

router.get('/:department/:category/:subcategory/page/:page', function (req, res, next) {
    var perPage = 6
    var page = req.params.page || 1
    var department = req.params.department;
    var category = req.params.category;
    var subcategory;
    var subcategoryList = []

    Product
        .find({ department: department, category: category }, function(err, products) {
            products.forEach(function(product) {
                subcategory = product.subcategory;
                if (req.params.subcategory == subcategory.toLowerCase().replace(/\s/g,'')) {
                    subcategoryList.push(product)
                }
            })
        })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, products) {
            Product.count().exec(function (err, count) {
                if (err) return next(err)
                res.render('shop/shop', {
                    title: subcategory + ' - '+ department.toUpperCase() + ' | Dalessio',
                    products: subcategoryList,
                    pagination: {
                    page: page,       // The current page the user is on
                    pageCount: Math.ceil(count / perPage)  // The total number of available pages
                }
            })
        })
    })
});


module.exports = router;