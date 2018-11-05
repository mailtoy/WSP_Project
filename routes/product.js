var express = require('express');
var router = express.Router();
var Product = require('../models/product');
// var Cart = require('../models/cart')

var categories = {
    ladies: {
        "Dresses": {
            "Short dress": "/product/ladies/dresses/shortdresses/page/1",
            "Midi dress": "/product/ladies/dresses/mididresses/page/1",
            "Bodycon": "/product/ladies/dresses/bodycon/page/1",
        }
    },
    men: {
        "T-shirt": {
            "Polo": "blah"
        }
    },
    kids: {
        "T-shirt": {
            "Polo": "blah"
        }
    }
}

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
    var categoryList = {};
    for (var key in categories) {
        if (key === department) {
            categoryList = categories[key]
        }
    }
    Product
        .find({ department: department })
        .limit(perPage)
        .exec(function (err, products) {
            Product.count().exec(function (err, count) {
                if (err) return next(err)
                res.render('shop/shop', {
                    title: department.toUpperCase() + ' | Dalessio',
                    products: products,
                    department: department,
                    categories: categoryList,
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
    var categoryList = {};
    for (var key in categories) {
        if (key === department) {
            categoryList = categories[key]
        }
    }
    Product
        .find({ department: department, category: category })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, products) {
            Product.count().exec(function (err, count) {
                if (err) return next(err)
                res.render('shop/shop', {
                    title: category.capitalize() + ' - '+ department.toUpperCase() + ' | Dalessio',
                    products: products,
                    department: department,
                    categories: categoryList,
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
    var subcategoryList = [];
    var categoryList = {};
    for (var key in categories) {
        if (key === department) {
            categoryList = categories[key]
        }
    }
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
            res.render('shop/shop', {
                title: subcategory + ' - '+ department.toUpperCase() + ' | Dalessio',
                products: subcategoryList,
                department: department,
                categories: categoryList,
                pagination: {
                page: page,       // The current page the user is on
                pageCount: Math.ceil(subcategoryList.length / perPage)  // The total number of available pages
            }
        })
    })
});


module.exports = router;