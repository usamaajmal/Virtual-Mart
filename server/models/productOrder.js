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


let ProductOrder = module.exports = mongoose.model('ProductOrder',ProductOrderSchema);

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
		
		shopId : data.shopId,
        customerId : data.customerId,
        totalAmount : data.totalAmount,
        status : data.status,
        date : data.date,
        productList : data.productList
	}
	productorder.create(add,callback);
}

module.exports.removeProductOrder = (id,callback) =>{
	let query = {_id:id};
	productorder.remove(query,callback);
}

module.exports.editProductOrder = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		shopId : data.shopId,
        customerId : data.customerId,
        totalAmount : data.totalAmount,
        status : data.status,
        date : data.date,
        productList : data.productList
	}
	product.findOneAndUpdate(id,update,option,callback);
}
module.exports.getProductOrderByName = (name,callback) =>{
	let query = {company:name};
	productorder.findOne(query,callback);
}