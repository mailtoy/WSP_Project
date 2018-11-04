var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var schema = new Schema({
    concept: { type: String, required: true },
    catagoty: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    color_stock: { type: Object, required: true },
    size_stock: { type: Object, required: true }
})

module.exports = mongoose.model('Product', schema);