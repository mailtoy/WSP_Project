var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var schema = new Schema({
    ladies: { type: Object, required: true },
    men: { type: Object, required: true },
    kids: { type: Object, required: true }
})

module.exports = mongoose.model('Category', schema);