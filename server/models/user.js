const mongoose = require('Mongoose')

const userSchema = mongoose.Schema({
	userName : {
		type:String,
		required:true
	},
	email : {
		type:String,
		required:true
	},
	password : {
		type:String,
		required:true
	},
	type : {
		type:String,
		required:true
	}
});

let user = module.exports = mongoose.model('User',userSchema);

/*CRUD OPERATIONS*/
module.exports.addUser = (data,callback) =>{
	let add = {
		userName : data.userName,
		email : data.email,
		password : data.password,
		type : data.type
	}
	user.create(add,callback);
}

module.exports.getUsers = (callback,limit) => {
	user.find(callback).limit(limit);
}

module.exports.getUserById = (id,callback) =>{
	user.findById(id,callback);
}

module.exports.editUser = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		userName : data.userName,
		email : data.email,
		password : data.password,
		type : data.type
		
	}
	user.findOneAndUpdate(query,update,option,callback);
}

module.exports.removeUser = (id,callback) =>{
	let query = {_id:id};
	user.findOneAndRemove(query,callback);
}