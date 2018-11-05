var Category = require('../models/category')
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

var done = 0;
var categories = [
    new Category({
        ladies: {
            dresses: {
                "Short dress": "/product/ladies/dresses/shortdresses/page/1",
                "Midi dress": "/product/ladies/dresses/mididresses/page/1",
                "Bodycon": "/product/ladies/dresses/bodycon/page/1",
            }
        },
        men: {
            "T-shirt": {
                "Polo": "blah"
            }
        },
        kids: {
            "T-shirt": {
                "Polo": "blah"
            }
        }
    })
]
for (var i = 0; i < categories.length; i++) {
    categories[i].save(function (err, result) {
        done++;
        if (done === categories.length) {
            console.log(err);
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}