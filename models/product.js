var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// var schema = new Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     // color: { type: String, size: [{
//     //     type: String,
//     //     qty: Number
//     // }] },
//     imagePath_1: { type: String, required: true },
//     imagePath_2: { type: String, required: true },
//     imagePath_3: { type: String, required: true },
//     imagePath_4: { type: String, required: true },
//     imagePath_5: { type: String, required: true }
// })

var schema = new Schema({
    department: { type: String },
    catalog: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    color: { type: Object },
    size: { type: Object }
})

module.exports = mongoose.model('Product', schema);