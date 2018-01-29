var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    married: {type: Boolean, required: true}
});

module.exports = mongoose.model('Employee', schema,'employees');