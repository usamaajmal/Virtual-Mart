const mongoose = require('Mongoose')

const productSchema = mongoose.Schema({
	
	shopId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Shop'
	},
	name : {
		type:String,
		required:true
    },
    quantity : {
        type :Number,
        required : true
    },
    price : {
        type :Number,
        required : true
    },
    pic : {
        type : String
    },
    details : {
        type : String
    },
    category : {
        type : String,
        required : true
    }
});


let product = module.exports = mongoose.model('Product',productSchema);

/*Requests*/

module.exports.getProducts = (callback,limit) => {
	product.find(callback).limit(limit);
}

module.exports.getProductById = (id,callback) =>{
	product.findById(id,callback);
}

module.exports.addProduct = (data,callback) =>{
	let add = {		
		shopId : data.shopId,
        name : data.name,
        quantity : data.quantity,
        price : data.price,
        pic : data.pic,
        details : data.details,
        category : data.category
	}
	product.create(add,callback);
}

module.exports.removeProduct = (id,callback) =>{
	let query = {_id:id};
	product.findOneAndRemove(query,callback);
}

module.exports.editProduct = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		shopId : data.shopId,
        name : data.name,
        quantity : data.quantity,
        price : data.price,
        pic : data.pic,
        details : data.details,
        category : data.category
	}
	product.findOneAndUpdate(query,update,option,callback);
}