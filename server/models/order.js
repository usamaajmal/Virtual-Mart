const mongoose = require('Mongoose')

const OrderSchema = mongoose.Schema({
	
	
	customerId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Customer'
    },
    totalAmount : {
        type : Number,
		required : true
    },
    status : {
        type : String,
		required : true
    },
    date : {
        type : Date,
        default:Date.now,
        required : true
    },
    productList :[{
        shopId : {
            type:mongoose.Schema.Types.ObjectId,
            ref : 'Shop'
        },
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


let order = module.exports = mongoose.model('Order',OrderSchema);

/*Requests*/

module.exports.getOrders = (callback,limit) => {
	order.find(callback).limit(limit);
}

module.exports.getOrderById = (id,callback) =>{
	order.findById(id,callback);
}

module.exports.addOrder = (data,callback) =>{
	let add = {
		
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
	order.findOneAndRemove(query,callback);
}

module.exports.editOrder = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		customerId : data.customerId,
        totalAmount : data.totalAmount,
        status : data.status,
        date : data.date,
        productList : data.productList
	}
	order.findOneAndUpdate(query,update,option,callback);
}