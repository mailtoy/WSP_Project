var Cart = require("../models/cart.js");
var Product = require("../models/product.js");
var should = require('chai').should();


describe('Cart testing', function () {

    it('initialize cart by items', function (done) {
        items = {}
        items['100'] = {
            id: '100',
            qty: '1',
            item:
                new Product({
                    title: 'Test Dress1',
                    description: 'Just test1',
                    price: 20,
                    imagePath_1: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_948a4e6c319a3d047478f77274437b8efc44edfc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                    imagePath_2: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_54f6dd0daafd05ca926b9c45db07cab3e8fc2abc.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                    imagePath_3: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_146fea53997894879f009f28244093622ab923d0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                    imagePath_4: 'https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_9bec1151352ff18c3e72fdb0bf3239c0fba1ff43.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                    imagePath_5: 'https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200702650%20002%2099%20f2b456ce8ee2d882e716175965568992cd3cc967.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D',
                }), price: 20
        }
        var cart = new Cart(items);
        console.log(cart.items['100'])
        done()
    });

});
