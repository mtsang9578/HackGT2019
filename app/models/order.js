var mongoose = require('mongoose');
var User       = require('./user');

var quantifySchema = mongoose.Schema({foodId: Number, quantity: Number});
var orderSchema = mongoose.Schema({

	items: [quantifySchema],
	date: Date,
	user: User,
	ready: Boolean

});

module.exports = mongoose.model('Order', orderSchema);