const mongoose = require('Mongoose')

const shopKeeperSchema = mongoose.Schema({
	userId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'User'
	},
	name : {
		type:String,
		required:true
	},
	cnic : {
		type:String,
		required:true
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
	let add = {
		userId : data.userId,
		phone : data.phone,
		name : data.name,
		cnic : data.cnic
	}
	shopkeeper.create(add,callback);
}

module.exports.removeShopkeeper = (id,callback) =>{
	let query = {_id:id};
	shopkeeper.findOneAndRemove(query,callback);
}

module.exports.editShopkeeper = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		userId : data.userId,
		phone : data.phone,
		name : data.name,
		cnic : data.cnic
	}
	shopkeeper.findOneAndUpdate(query,update,option,callback);
}