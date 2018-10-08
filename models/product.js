var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imagePath_1: { type: String, required: true },
    imagePath_2: { type: String, required: true },
    imagePath_3: { type: String, required: true },
    imagePath_4: { type: String, required: true },
    imagePath_5: { type: String, required: true }
})

module.exports = mongoose.model('Product', schema);