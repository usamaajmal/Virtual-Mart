const mongoose = require('Mongoose')

const ProductOrderSchema = mongoose.Schema({
	
	productId : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Product'
	},
	orderId : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Order'
    }
});


let productorder = module.exports = mongoose.model('ProductOrder',ProductOrderSchema);

/*Requests*/

module.exports.getProductOrders = (callback,limit) => {
	productorder.find(callback).limit(limit);
}

module.exports.getProductOrderById = (id,callback) =>{
	productorder.findById(id,callback);
}

module.exports.addProductOrder = (data,callback) =>{
	console.log(data);
	let add = {
		
		productId: data.productId,
		orderId : data.orderId
	}
	productorder.create(add,callback);
}

module.exports.removeProductOrder = (id,callback) =>{
	let query = {_id:id};
	productorder.findOneAndRemove(query,callback);
}

module.exports.editProductOrder = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		productId: data.productId,
		orderId : data.orderId
	}
	product.findOneAndUpdate(query,update,option,callback);
}