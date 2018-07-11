const express = require("Express");
const router = express.Router();
const shopkeeper = require("../models/shopkeeper")

// add shopkeeper
router.post('/add',(req,res)=>{
	let obj = req.body.Shopkeeper;
	shopkeeper.addShopkeeper(obj,(err,shopkeeper)=>{
		 if (err) {
		 	console.log("Error at addshopkeeper");
		 	res.send(err);
		 }
		 console.log("new shopkeeper in db");
		 res.send(shopkeeper);
	})
})

// get all shopkeepers
router.get('/',(req,res)=>{
	shopkeeper.getShopkeepers((err,shopkeepers)=>{
		 if (err) {
		 	console.log("Error at getshopkeepers");
		 	res.send(err);
		 }
		 console.log("retrieved all shopkeepers");
		 res.send(shopkeepers);
	})
})

// get a specific shopkeeper
router.get('/:id',(req,res)=>{
	let id = req.params.id;
	shopkeeper.getShopkeeperById(id,(err,shopkeeper)=>{
		 if (err) {
		 	console.log("Error at getshopkeeperbyId");
		 	res.send(err);
		 }
		 console.log("retrived the specified shopkeeper");
		 res.send(shopkeeper);
	})
})

//edit a shopkeeper
router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Shopkeeper;
		shopkeeper.editShopkeeper(id,edit,{},(err,shopkeeper) =>{
			if(err){
				console.log("ERROR at Editshopkeeper");
				res.send(err);
			}
			console.log("shopkeeper edited");
			res.send(shopkeeper);
		})
})

//delete a shopkeeper
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	shopkeeper.removeShopkeeper(id,(err,shopkeeper) =>{
		if(err){
			console.log("ERROR at deleteshopkeeper");
			res.send(err);
		}
		console.log("shopkeeper deleted");
		res.send(shopkeeper);
	})
})

module.exports = router;
