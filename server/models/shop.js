const mongoose = require('Mongoose')

const shopSchema = mongoose.Schema({
	ShopkeeperId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Shopkeeper'
	},
	shopId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Shop'
	},
	name : {
		type:String,
		required:true
    },
    location : {
        type :String,
        required : true
    },
    category : {
        type :String,
        required : true
    },
    license : {
        type : String,
        required:true
    }
});


let shop = module.exports = mongoose.model('Shop',shopSchema);

/*Requests*/

module.exports.getShops = (callback,limit) => {
	shop.find(callback).limit(limit);
}

module.exports.getShopById = (id,callback) =>{
	shop.findById(id,callback);
}

module.exports.addShop = (data,callback) =>{
	console.log(data);
	let add = {
		ShopkeeperId : data.ShopkeeperId,
		shopId : data.shopId,
        name : data.name,
        location : data.location,
        category : data.category,
        license : data.license
	}
	shop.create(add,callback);
}

module.exports.removeShop = (id,callback) =>{
	let query = {_id:id};
	shop.remove(query,callback);
}

module.exports.editShop = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		ShopkeeperId : data.ShopkeeperId,
		shopId : data.shopId,
        name : data.name,
        location : data.location,
        category : data.category,
        license : data.license
	}
	shop.findOneAndUpdate(id,update,option,callback);
}
module.exports.getShopByName = (name,callback) =>{
	let query = {company:name};
	shop.findOne(query,callback);
}