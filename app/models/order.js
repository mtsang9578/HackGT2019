var mongoose = require('mongoose');

var quantifySchema = new Schema({foodId: Number, quantity: Number});
var orderSchema = mongoose.Schema({

	items: quantifySchema[],
	date: Date,
	user: User,
	ready: Boolean

});

module.exports = mongoose.model('Order', orderSchema);