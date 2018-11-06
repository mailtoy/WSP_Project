var mongoose = require('mongoose');
var Product = require("../models/product.js");
var should = require('chai').should();


describe('Product testing', function () {

    before(function (done) {
        db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after(function (done) {
        mongoose.connection.close()
        done();
    });

    it('save a products', function (done) {
        var products = [
            new Product({
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
            })
        ];

        for (var i = 0; i < products.length; i++) {
            products[i].save(function (err) {
                should.not.exist(err);
            });
        }
        done();
    });

    it('find a product by title', function (done) {
        Product.find({ title: 'Test Dress1' }, function (err, product) {
            should.not.exist(err);
            product.length.should.equal(1)
            product[0].title.should.equal('Test Dress1');
            product[0].description.should.equal('For test only1')
            product[0].price.should.equal(100)
        });
        done();
    });

    it('find a products by price', function (done) {
        Product.find({ price: 100 }, function (err, product) {
            should.not.exist(err);
            product.length.should.equal(1)
            product[0].title.should.equal('Test Dress1');
            product[0].description.should.equal('For test only1')
            product[0].price.should.equal(100)
        });
        done();
    });

    it('update a product', function (done) {
        Product.update({ title: 'Test Dress1' }, { $set: { title: 'Updated' } }, function (err, product) {
            should.not.exist(err);
        })
        done();
    });

    it('find a product after update', function (done) {
        Product.findOne({ title: 'Updated' }, function (err, product) {
            should.not.exist(err);
            product.title.should.equal('Updated');
            product.description.should.equal('For test only1')
            product.price.should.equal(100)
        });
        done()
    });

    it('delete a products', function (done) {
        Product.remove({}, function (err) {
            should.not.exist(err);
        });
        done();
    });

});
