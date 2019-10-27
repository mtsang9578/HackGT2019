var mongoose = require('mongoose');

var tableOrderSchema = mongoose.Schema({

	tableNumber: Number,
	orders: Order[]

});

module.exports = mongoose.model('TableOrder', tableOrderSchema);