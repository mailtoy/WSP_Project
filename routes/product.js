var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var filter = require('../modules/filter');

var categories = {
    ladies: {
        "Dresses": {
            "Short dresses": "/product/ladies/dresses/shortdresses/page/1",
            "Midi dresses": "/product/ladies/dresses/mididresses/page/1",
            "Bodycon": "/product/ladies/dresses/bodycon/page/1",
        }
    },
    men: {
        "Tanktops": {
            "Short sleeves": "/product/men/tanktops/shortsleeves/page/1",
            "Long sleeves": "/product/men/tanktops/longsleeves/page/1"
        }
    },
    kids: {
        "T-shirt": {
            "Polo": "blah"
        }
    }
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

router.get('/:id', function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            console.log(err);
        } else {
            res.render('shop/product', {
                title: product.title + " | Dalessio",
                product: product
            });
        }
    })
});

router.get('/:department/page/:page', function (req, res, next) {
    var perPage = 6
    var page = req.params.page || 1
    var department = req.params.department;
    var categoryList = {};
    var skip = (perPage * page) - perPage
    var limit = skip + perPage
    for (var key in categories) {
        if (key === department) {
            categoryList = categories[key]
        }
    }
    Product
        .find({ department: department }, (function (err, products) {
            if (req.query.filter)
                products = filter(req, res, products)
            res.render('shop/shop', {
                title: department.toUpperCase() + ' | Dalessio',
                products: products.slice(skip, limit),
                department: department,
                categories: categoryList,
                pagination: {
                    page: page,       // The current page the user is on
                    pageCount: Math.ceil(products.length / perPage),  // The total number of available pages
                    params: req.query.filter ? "?" + req.originalUrl.split('?')[1] : "",
                },
                filter: req.query.filter
            })
        }))
});

router.get('/:department/:category/page/:page', function (req, res, next) {
    var perPage = 6
    var page = req.params.page || 1
    var department = req.params.department;
    var category = req.params.category;
    var categoryList = {};
    var skip = (perPage * page) - perPage
    var limit = skip + perPage
    for (var key in categories) {
        if (key === department) {
            categoryList = categories[key]
        }
    }
    Product
        .find({ department: department, category: category }
            , function (err, products) {
                if (req.query.filter)
                    products = filter(req, res, products)
                res.render('shop/shop', {
                    title: category.capitalize() + ' - ' + department.toUpperCase() + ' | Dalessio',
                    products: products.slice(skip, limit),
                    department: department,
                    categories: categoryList,
                    pagination: {
                        page: page,       // The current page the user is on
                        pageCount: Math.ceil(products.length / perPage), // The total number of available pages
                        params: req.query.filter ? "?" + req.originalUrl.split('?')[1] : "",
                    },
                    filter: req.query.filter
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
    var skip = (perPage * page) - perPage
    var limit = skip + perPage
    for (var key in categories) {
        if (key === department) {
            categoryList = categories[key]
        }
    }
    Product
        .find({ department: department, category: category }, function (err, products) {
            products.forEach(function (product) {
                subcategory = product.subcategory;
                if (req.params.subcategory == subcategory.toLowerCase().replace(/\s/g, '')) {
                    subcategoryList.push(product)
                }
            })
        }).exec(function () {
            if (req.query.filter)
                subcategoryList = filter(req, res, subcategoryList)
            res.render('shop/shop', {
                title: subcategory + ' - ' + department.toUpperCase() + ' | Dalessio',
                products: subcategoryList.slice(skip, limit),
                department: department,
                categories: categoryList,
                pagination: {
                    page: page,       // The current page the user is on
                    pageCount: Math.ceil(subcategoryList.length / perPage),  // The total number of available pages
                    params: req.query.filter ? "?" + req.originalUrl.split('?')[1] : "",
                },
                filter: req.query.filter
            })
        })
})

module.exports = router;