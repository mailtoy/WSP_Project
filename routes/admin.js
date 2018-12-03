var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Product = require('../models/product');
var Order = require('../models/order');

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

router.post('/addProduct', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(req.files);
        res.end('Your files uploaded.');
        console.log('Yep yep!');
    });
});

router.get('/add-product/', function (req, res) {
    res.render('admin/addProduct')
});

router.get('/orders/', function (req, res) {
    Order.find(function(err,orders){
        res.render('admin/orders', {
            orders: orders
        })
    })
});

router.get('/users/', function (req, res) {
  User.find(function(err,users){
      res.render('admin/users', {
          users: users
      })
    })
});

router.get('/product/edit/:id', function (req, res) {
    // Product.findById(req.params.id, function (err, product) {
    //     currentProduct = product
    // })
    var query = req.query.productUpdate
    if (query) {
        Product.findById(req.params.id, function (err, product) {
            product.title = query.title
            product.price = query.price
            product.description = query.description
            product.detail = query.detail
            product.color = query.color
            product.size = query.size
            product.save(function (err, updatedProduct) {
                res.redirect('back');
            });
        });

    } else
        Product.findById(req.params.id, function (err, product) {
            res.render('admin/editProduct', {
                title: product.title + " | Dalessio",
                product: product
            });
        })
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

router.get('/user/remove/:id', function (req, res) {
    let query = {
        _id: req.params.id
    }
    User.findById(req.params.id, function (err, users) {
        User.remove(query, function (err) {
            res.redirect('back');
        })
    })
})



module.exports = router;
