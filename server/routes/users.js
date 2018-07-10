const express = require("Express");
const router = express.Router();
const user = require("../models/user")

// add user
router.post('/add',(req,res)=>{
	let obj = req.body.User;
	user.addUser(obj,(err,user)=>{
		 if (err) {
		 	console.log("Error at getUserbyId");
		 	res.send(err);
		 }
		 console.log("new user in db");
		 res.send(user);
	})
})

// get all users
router.get('/',(req,res)=>{
	user.getUsers((err,users)=>{
		 if (err) {
		 	console.log("Error at getUsers");
		 	res.send(err);
		 }
		 console.log("retrieved all users");
		 res.send(users);
	})
})

// get a specific user
router.get('/:id',(req,res)=>{
	let id = req.params.id;
	user.getUserById(id,(err,user)=>{
		 if (err) {
		 	console.log("Error at getUserbyId");
		 	res.send(err);
		 }
		 console.log("retrived the specified used");
		 res.send(user);
	})
})

//edit a user
router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.User;
		user.editUser(id,edit,{},(err,user) =>{
			if(err){
				console.log("ERROR at EditUser");
				res.send(err);
			}
			console.log("user edited");
			res.send(user);
		})
})

//delete a user
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	user.removeUser(id,(err,user) =>{
		if(err){
			console.log("ERROR at deleteUser");
			res.send(err);
		}
		console.log("user deleted");
		res.send(user);
	})
})

module.exports = router;
