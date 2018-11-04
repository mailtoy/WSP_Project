var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var schema = new Schema({
    concept: { type: String, required: true },
    catagory: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    detail: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: Object, required: true },
    size: { type: Object, required: true }
})

module.exports = mongoose.model('Product', schema);