var mongoose = require('mongoose');
var Order = require("../models/order.js");
var Product = require("../models/product.js");
var Cart = require("../models/cart.js");
var User = require("../models/user.js");
var should = require('chai').should();

describe('Order testing', function () {

    before(function (done) {
        db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after(function (done) {
        mongoose.connection.close()
        done();
    });

    it('save order', function (done) {
        var items = {}
        items['100'] = {
            id: '100',
            qty: 1,
            item: new Product({
                department: "ladies",
                category: "dresses1",
                subcategory: "Dresses1",
                title: "Test Dress1",
                description: "For test only1",
                detail: "Best of the best1",
                price: 100,
                color: {
                    "White": [
                        "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_bb681d10356ff0b0d22205b0fe7b23dab77bbef9.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                        "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_7ce5c077550164ded2222cae991ebff9832fe329.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                        "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f3cd0e8d515ef4dc7e05aa2ea436980ea31ff720.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                        "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200707075%20001%2099%20701799ec640fae31943166bc699e8feaf61c9096.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                    ],
                    "Blue": [
                        "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f1a8a5d897cafdb171ddb4c0646e396948411c22.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                        "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_6f751c2de32b33a7692fde68cce498e43b755b79.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                        "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_110a64d4bf5022eacff443028b1ec0865fb648d4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                        "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_fc8c5d2b4915f41c569b989bc9da5e52dfc06e02.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                    ]
                },
                size: {
                    "S": "50",
                    "M": "100",
                    "L": "100",
                    "XL": "50"
                }
            }),
            price: 20
        };

        var save_order = new Order({
            user: new User({
                email: 'test@hotmail.com',
                password: 'testy',
                firstName: 'Mr.Test',
                lastName: 'Eiei',
                address: 'Somewhere',
                city: 'On Earth',
                state: 'In the world',
                zip: '12345s'
            }),
            cart: new Cart(items),
            address: 'Somewhere',
            name: 'Mr.Test',
            paymentId: '123'
        })
        save_order.save(function (error) {
            should.not.exist(error);
        });
        done();
    });

    it('find an order by name', function (done) {
        Order.find({ name: 'Mr.Test' }, function (err, order) {
            should.not.exist(err);
            order.length.should.equal(1)
            order[0].name.should.equal('Mr.Test');
            order[0].address.should.equal('Somewhere')
            order[0].paymentId.should.equal('123')
        });
        done();
    });

    it('find an order by paymentId', function (done) {
        Order.find({ paymentId: '123' }, function (err, order) {
            should.not.exist(err);
            order.length.should.equal(1)
            order[0].name.should.equal('Mr.Test');
            order[0].address.should.equal('Somewhere')
            order[0].paymentId.should.equal('123')
        });
        done();
    });

    it('update order', function (done) {
        Order.update({ name: 'Mr.Test' }, { $set: { name: 'Updated' } }, function (err, product) {
            should.not.exist(err);
        })
        done();
    });

    it('find an order after update', function (done) {
        Order.findOne({ name: 'Updated' }, function (err, order) {
            should.not.exist(err);
            order.name.should.equal('Updated');
            order.address.should.equal('Somewhere')
        });
        done()
    });

    it('delete an order', function (done) {
        Order.remove({}, function (err) {
            should.not.exist(err);
        });
        done();
    });
});
