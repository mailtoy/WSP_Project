var mongoose = require('mongoose');
var Product = require("../models/product.js");
// var expect = require('chai').expect;
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

    it('save a product', function (done) {
        var products = [
            new Product({
                title: 'Test Dress1',
                description: 'Just test1',
                price: 999,
                imagePath_1: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_948a4e6c319a3d047478f77274437b8efc44edfc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_2: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_54f6dd0daafd05ca926b9c45db07cab3e8fc2abc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_3: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_146fea53997894879f009f28244093622ab923d0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_4: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9bec1151352ff18c3e72fdb0bf3239c0fba1ff43.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_5: 'https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200702650%20002%2099%20f2b456ce8ee2d882e716175965568992cd3cc967.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            }),
            new Product({
                title: 'Test Dress2',
                description: 'Just test2',
                price: 999,
                imagePath_1: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_f597c4e91daf73af3e2bc0643f433fc49315de60.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_2: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_fda6db8dbd9bcfdfe6207f9b5bdf8434521a30ed.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_3: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_a4b712272e315181b5123f8d0cc0c24c8f5e1aa1.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_4: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4e4c1a003ab6c3ac888a2ecd3787ac1587571900.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_5: 'https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200690504%20001%2099%201a7a2db5e4fea92155d1f36863be4952937da4c1.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            }),
            new Product({
                title: 'Test Dress3',
                description: 'Just test3',
                price: 250,
                imagePath_1: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4d8a3e6333f200bdb6cc742db192981606f44040.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_2: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_e0cde50ed855d11b5f79d5984a7f4cdfc2c1e999.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_3: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_7a5a31421395efde79243e81839be0465c4b42c2.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_4: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_c26622ea41fd083973df7178b904ffdfc2327d7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_5: 'https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200721488%20001%2099%20e7f8afc50917f1273f07588da4b24dc82cb51fbd.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            })
        ];

        for (var i = 0; i < products.length; i++) {
            products[i].save(function (err, result) {
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
            product[0].description.should.equal('Just test1')
            product[0].price.should.equal(999)
            done();
        });
    });

    it('find a products by price', function (done) {
        Product.find({ price: '999' }, function (err, product) {
            should.not.exist(err);
            product.length.should.equal(2)
            product[0].title.should.equal('Test Dress1');
            product[0].description.should.equal('Just test1')
            product[0].price.should.equal(999)
            product[1].title.should.equal('Test Dress2');
            product[1].description.should.equal('Just test2')
            product[1].price.should.equal(999)
            done();
        });
    });

    it('delete a products', function (done) {
        Product.remove({}, function (err) {
            should.not.exist(err);
            done();
        });
    });

});
