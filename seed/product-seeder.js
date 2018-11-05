var Product = require('../models/product')

var mongoose = require('mongoose');
const CONNECTION_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/shopping"

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });

var products = [
    new Product({
        department: "Ladies",
        category: "Tops",
        subcategory: "Cropped Tops",
        title: "Ribbed top",
        description: "Short, fitted top in ribbed cotton jersey with short sleeves.",
        detail: "95% cotton, 5% elastane. Machine wash at 30˚",
        price: 399,
        color: {
            "Dark Yellow": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_951d46e2aab072a22e4bf088faf9e4fe1f9b154f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_85b95f7288735aa5825493f547e68c8eea5748ca.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_995761a7f9a5b2d3dd7aaa72ab47b9f9bdd1f585.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_6ba618200bc257ab828025033ee79e513daaed51.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200624486%20009%2099%20ea8abe8783b4e6ec6130f2f7c1d9865ee578d2e3.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Rasberry Red": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4ab5e171340c19083a74617f6b705b970d2d02c1.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4488ea6ee93492ab988876daea86f252b41aa75f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ce4ceff9bcb680edee8798e3c944b287c39ee0d7.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200624486%20008%2099%20661d72a87d709107ec838c3546cf309f6880056f.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }), 
    new Product(new Product({
        department: "Ladies",
        category: "Ladies",
        subcategory: "Cropped Tops",
        title: "Ribbed top",
        description: "Short, fitted top in ribbed cotton jersey with short sleeves.",
        detail: "95% cotton, 5% elastane. Machine wash at 30˚",
        price: 399,
        color: {
            "White": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_951d46e2aab072a22e4bf088faf9e4fe1f9b154f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_85b95f7288735aa5825493f547e68c8eea5748ca.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_995761a7f9a5b2d3dd7aaa72ab47b9f9bdd1f585.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_6ba618200bc257ab828025033ee79e513daaed51.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200624486%20009%2099%20ea8abe8783b4e6ec6130f2f7c1d9865ee578d2e3.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ],
            "Red": [
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4ab5e171340c19083a74617f6b705b970d2d02c1.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_4488ea6ee93492ab988876daea86f252b41aa75f.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FH00_0000_ce4ceff9bcb680edee8798e3c944b287c39ee0d7.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                "https://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FH00%200624486%20008%2099%20661d72a87d709107ec838c3546cf309f6880056f.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
            ]
        },
        size: {
            "S": "50",
            "M": "100",
            "L": "100",
            "XL": "50"
        }
    }))
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        console.log(err)
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}