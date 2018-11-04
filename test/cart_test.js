var Cart = require("../models/cart.js");
var Product = require("../models/product.js");
var should = require('chai').should();


describe('Cart testing', function () {
    it('initialize cart by item', function (done) {
        var items = {}
        items['100'] = {
            id: '100',
            qty: 1,
            item: new Product({
                title: 'Test Dress1',
                description: 'Just test1',
                price: 20,
                imagePath_1: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_948a4e6c319a3d047478f77274437b8efc44edfc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_2: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_54f6dd0daafd05ca926b9c45db07cab3e8fc2abc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_3: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_146fea53997894879f009f28244093622ab923d0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_4: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9bec1151352ff18c3e72fdb0bf3239c0fba1ff43.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                imagePath_5: 'https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200702650%20002%2099%20f2b456ce8ee2d882e716175965568992cd3cc967.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            }),
            price: 20
        }
        cart = new Cart(items);
        cart.items['100'].id.should.equal('100')
        cart.items['100'].qty.should.equal(1)
        cart.items['100'].price.should.equal(20)
        cart.items['100'].item.title.should.equal('Test Dress1')
        cart.items['100'].item.description.should.equal('Just test1')
        cart.items['100'].item.price.should.equal(20)
        cart.totalQty.should.equal(1)
        cart.totalPrice.should.equal(20)
        done()
    });

    it('add item by one', function (done) {
        var newProduct = new Product({
            title: 'Added Product',
            description: 'Test for adding a new product',
            price: 10,
            imagePath_1: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_948a4e6c319a3d047478f77274437b8efc44edfc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            imagePath_2: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_54f6dd0daafd05ca926b9c45db07cab3e8fc2abc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            imagePath_3: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_146fea53997894879f009f28244093622ab923d0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            imagePath_4: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9bec1151352ff18c3e72fdb0bf3239c0fba1ff43.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            imagePath_5: 'https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200702650%20002%2099%20f2b456ce8ee2d882e716175965568992cd3cc967.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
        })
        cart.add(newProduct, '200');
        cart.items['200'].id.should.equal('200')
        cart.items['200'].qty.should.equal(1)
        cart.items['200'].price.should.equal(10)
        cart.items['200'].item.title.should.equal('Added Product')
        cart.items['200'].item.description.should.equal('Test for adding a new product')
        cart.items['200'].item.price.should.equal(10)
        cart.add(newProduct, '200');
        cart.items['200'].id.should.equal('200')
        cart.items['200'].qty.should.equal(2)
        cart.items['200'].price.should.equal(20)
        cart.items['200'].item.title.should.equal('Added Product')
        cart.items['200'].item.description.should.equal('Test for adding a new product')
        cart.items['200'].item.price.should.equal(10)
        cart.totalQty.should.equal(3)
        cart.totalPrice.should.equal(40)
        done()
    });

    it('genarate items to array', function (done) {
        var array = cart.generateArray()
        array.length.should.equal(2)
        array[0].id.should.equal('100')
        array[0].qty.should.equal(1)
        array[0].price.should.equal(20)
        array[0].item.title.should.equal('Test Dress1')
        array[0].item.description.should.equal('Just test1')
        array[0].item.price.should.equal(20)
        array[1].id.should.equal('200')
        array[1].qty.should.equal(2)
        array[1].price.should.equal(20)
        array[1].item.title.should.equal('Added Product')
        array[1].item.description.should.equal('Test for adding a new product')
        array[1].item.price.should.equal(10)
        done()
    });

    it('add item by 3 quantities', function (done) {
        var newProduct = new Product({
            title: 'Added Product by quantity',
            description: 'Test for adding a new product by 3 quantity',
            price: 30,
            imagePath_1: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_948a4e6c319a3d047478f77274437b8efc44edfc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            imagePath_2: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_54f6dd0daafd05ca926b9c45db07cab3e8fc2abc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            imagePath_3: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_146fea53997894879f009f28244093622ab923d0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            imagePath_4: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9bec1151352ff18c3e72fdb0bf3239c0fba1ff43.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
            imagePath_5: 'https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200702650%20002%2099%20f2b456ce8ee2d882e716175965568992cd3cc967.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
        })
        cart.addByQty(newProduct, '300', 3)
        cart.items['300'].id.should.equal('300')
        cart.items['300'].qty.should.equal(3)
        cart.items['300'].price.should.equal(90)
        cart.items['300'].item.title.should.equal('Added Product by quantity')
        cart.items['300'].item.description.should.equal('Test for adding a new product by 3 quantity')
        cart.items['300'].item.price.should.equal(30)
        cart.totalQty.should.equal(6)
        cart.totalPrice.should.equal(130)
        done()
    });

    it('remove all items in cart', function (done) {
        cart.remove('100')
        cart.remove('200')
        cart.remove('300')
        should.not.exist(cart.items['100']);
        should.not.exist(cart.items['200']);
        should.not.exist(cart.items['300']);
        cart.totalQty.should.equal(0)
        cart.totalPrice.should.equal(0)
        done()
    });

});
