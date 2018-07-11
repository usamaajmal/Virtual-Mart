const mongoose = require('Mongoose')

const SaleSchema = mongoose.Schema({
	
	shopId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Shop'
	},
	customerId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Customer'
    },
    shopkeeperId : {
        type : mongoose.Schema.Types.ObjectId,
		ref : 'Shopkeeper'
    },
    orderId : {
        type : mongoose.Schema.Types.ObjectId,
		ref : 'Order'
    },
    paidAmount : {
        type : Number,
        required : true
    }
});


let sale = module.exports = mongoose.model('Sale',SaleSchema);

/*Requests*/

module.exports.getSales = (callback,limit) => {
	sale.find(callback).limit(limit);
}

module.exports.getSaleById = (id,callback) =>{
	sale.findById(id,callback);
}

module.exports.addSale = (data,callback) =>{
	let add = {		
		shopId : data.shopId,
        customerId : data.customerId,
        shopkeeperId : data.shopkeeperId,
        orderId : data.orderId,
        paidAmount : data.paidAmount
	}
	sale.create(add,callback);
}

module.exports.removeSale = (id,callback) =>{
	let query = {_id:id};
	sale.findOneAndRemove(query,callback);
}

module.exports.editSale = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		shopId : data.shopId,
        customerId : data.customerId,
        shopkeeperId : data.shopkeeperId,
        orderId : data.orderId,
        paidAmount : data.paidAmount
	}
	sale.findOneAndUpdate(query,update,option,callback);
}