var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Product = require('../models/product');

router.get('/product/:page', function (req, res) {
    var perPage = 6
    var page = req.params.page || 1
    var skip = (perPage * page) - perPage
    var limit = skip + perPage
    Product
        .find({})
        .exec(function (err, products) {
            res.render('admin/home', {
                title: 'Products | Dalessio',
                products: products.slice(skip, limit),
                pagination: {
                    page: page,       // The current page the user is on
                    pageCount: Math.ceil(products.length / perPage),  // The total number of available pages
                },
            })
        })
});

router.get('/add-product/', function (req, res) {
    res.render('admin/addProduct')
});

router.get('/product/edit/:id', function (req, res) {
    res.render('admin/editProduct')
});


router.get('/product/remove/:id', function (req, res) {
    let query = {
        _id: req.params.id
    }
    Product.findById(req.params.id, function (err, product) {
        Product.remove(query, function (err) {
            res.redirect('back');
        })
    })

})

module.exports = router;
