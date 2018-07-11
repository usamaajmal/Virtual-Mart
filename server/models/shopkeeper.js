const mongoose = require('Mongoose')

const shopKeeperSchema = mongoose.Schema({
	userId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'User'
	},
	shopId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'Shop'
	},
	phone : {
		type:String,
		required:true
	}
});


let shopkeeper = module.exports = mongoose.model('Shopkeeper',shopKeeperSchema);

/*Requests*/

module.exports.getShopkeepers = (callback,limit) => {
	shopkeeper.find(callback).limit(limit);
}

module.exports.getShopkeeperById = (id,callback) =>{
	shopkeeper.findById(id,callback);
}

module.exports.addShopkeeper = (data,callback) =>{
	console.log(data);
	let add = {
		userId : data.userId,
		shopId : data.shopId,
		phone : data.phone
	}
	shopkeeper.create(add,callback);
}

module.exports.removeShopkeeper = (id,callback) =>{
	let query = {_id:id};
	shopkeeper.remove(query,callback);
}

module.exports.editShopkeeper = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		userId : data.userId,
		shopId : data.shopId,
		phone : data.phone
		
	}
	shopkeeper.findOneAndUpdate(id,update,option,callback);
}
module.exports.getShopkeeperByName = (name,callback) =>{
	let query = {company:name};
	shopkeeper.findOne(query,callback);
}