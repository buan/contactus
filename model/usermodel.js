var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userschema = new Schema({
    fname      : String,
    lname       : String
});


var userModel = mongoose.model('usermodel', userschema);

module.exports = userModel;
