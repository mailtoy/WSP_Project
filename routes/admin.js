var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Product = require('../models/product');
var Order = require('../models/order');

router.get('/product/:page', isAdminLoggedIn, function (req, res) {
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

router.post('/add-product/', isAdminLoggedIn, function (req, res) {
    var product = new Product({
        department: req.body.department,
        category: req.body.category,
        subcategory: req.body.subcategory,
        title: req.body.productname,
        price: req.body.price,
        description: req.body.description,
        detail: req.body.detail,
        color: req.body.color,
        size: req.body.size,
        pics: req.body.pics,
    })
    product.save(function (err, result) {
        if (err) {
            console.log("err " + err);
        }
        console.log(result)
        res.redirect('/admin/product/1');
    });
});

router.get('/add-product/', isAdminLoggedIn, function (req, res) {
    res.render('admin/addProduct')
});

router.get('/orders/', isAdminLoggedIn, function (req, res) {
    Order.find(function (err, orders) {
        res.render('admin/orders', {
            orders: orders
        })
    })
});

router.get('/users/', isAdminLoggedIn, function (req, res) {
    User.find(function (err, users) {
        res.render('admin/users', {
            users: users
        })
    })
});

router.get('/product/edit/:id', isAdminLoggedIn, function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        res.render('admin/editProduct', {
            title: product.title + " | Dalessio",
            product: product
        });
    })
});

router.post('/product/edit/:id', isAdminLoggedIn, function (req, res) {
    Product.findById(req.params.id, function (err, product) {

        product.title = req.body.productname
        product.price = req.body.price
        product.description = req.body.description
        product.detail = req.body.detail
        product.color = req.body.color
        product.size = req.body.size
        product.pics = req.body.pics
        product.save(function (err, updatedProduct) {
            res.redirect('back');
        });
    });
});


router.get('/product/remove/:id', isAdminLoggedIn, function (req, res) {
    let query = {
        _id: req.params.id
    }
    Product.findById(req.params.id, function (err, product) {
        Product.remove(query, function (err) {
            res.redirect('back');
        })
    })
})

router.get('/user/remove/:id', isAdminLoggedIn, function (req, res) {
    let query = {
        _id: req.params.id
    }
    User.findById(req.params.id, function (err, users) {
        User.remove(query, function (err) {
            res.redirect('back');
        })
    })
})

function isAdminLoggedIn(req, res, next) {
    if (req.isAuthenticated() && req.user.admin) {
        return next();
    }
    res.redirect('/');
}



module.exports = router;
