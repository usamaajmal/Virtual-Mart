const mongoose = require('Mongoose')

const OrderSchema = mongoose.Schema({
	
	shopId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Shop'
	},
	customerId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Customer'
    },
    totalAmount : {
        type : Number,
		required : true
    },
    status : {
        type : string,
		required : true
    },
    date : {
        type : Date,
        default:Date.now,
        required : true
    },
    productList :[{
        productId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        },
        quantity : {
            type : Number,
            required : true
        }

    }]
});


let Order = module.exports = mongoose.model('Order',OrderSchema);

/*Requests*/

module.exports.getOrders = (callback,limit) => {
	order.find(callback).limit(limit);
}

module.exports.getOrderById = (id,callback) =>{
	order.findById(id,callback);
}

module.exports.addOrder = (data,callback) =>{
	console.log(data);
	let add = {
		
		shopId : data.shopId,
        customerId : data.customerId,
        totalAmount : data.totalAmount,
        status : data.status,
        date : data.date,
        productList : data.productList
	}
	order.create(add,callback);
}

module.exports.removeOrder = (id,callback) =>{
	let query = {_id:id};
	order.remove(query,callback);
}

module.exports.editOrder = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		shopId : data.shopId,
        customerId : data.customerId,
        totalAmount : data.totalAmount,
        status : data.status,
        date : data.date,
        productList : data.productList
	}
	order.findOneAndUpdate(id,update,option,callback);
}
module.exports.getOrderByName = (name,callback) =>{
	let query = {company:name};
	order.findOne(query,callback);
}