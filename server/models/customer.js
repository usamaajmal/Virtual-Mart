const mongoose = require('Mongoose')

const customerSchema = mongoose.Schema({
	userId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'User'
	},
	name : {
		type:String,
		required:true
	},
	phone : {
		type:String,
		required:true
    },
    cnic : {
		type:String,
		required:true
    },
    billingAddress : {
		type:String,
		required:true
    },
    deliveryAddress : {
		type:String,
		required:true
    }
});


let customer = module.exports = mongoose.model('Customer',customerSchema);

/*Requests*/

module.exports.getCustomers = (callback,limit) => {
	customer.find(callback).limit(limit);
}

module.exports.getCustomerById = (id,callback) =>{
	customer.findById(id,callback);
}

module.exports.addCustomer = (data,callback) =>{
	let add = {
		userId : data.userId,
		name : data.name,
        phone : data.phone,
        cnic : data.cnic,
        billingAddress : data.billingAddress,
        deliveryAddress : data.deliveryAddress
	}
	customer.create(add,callback);
}

module.exports.removeCustomer = (id,callback) =>{
	let query = {_id:id};
	customer.findOneAndRemove(query,callback);
}

module.exports.editCustomer = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		userId : data.userId,
		name : data.name,
        phone : data.phone,
        cnic : data.cnic,
        billingAddress : data.billingAddress,
        deliveryAddress : data.deliveryAddress
	}
	customer.findOneAndUpdate(query,update,option,callback);
}