var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var schema = new Schema({
    department: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    detail: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: Array, required: true },
    size: { type: Array, required: true },
    pics: { type: Array, required: true }
})

module.exports = mongoose.model('Product', schema);