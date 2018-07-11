const express = require("Express");
const router = express.Router();
const shop = require("../models/shop")

// add shop
router.post('/add',(req,res)=>{
	let obj = req.body.Shop;
	shop.addShop(obj,(err,shop)=>{
		 if (err) {
		 	console.log("Error at addshop");
		 	res.send(err);
		 }
		 console.log("new shop in db");
		 res.send(shop);
	})
})

// get all shops
router.get('/',(req,res)=>{
	shop.getShops((err,shops)=>{
		 if (err) {
		 	console.log("Error at getshops");
		 	res.send(err);
		 }
		 console.log("retrieved all shops");
		 res.send(shops);
	})
})

// get a specific shop
router.get('/:id',(req,res)=>{
	let id = req.params.id;
	shop.getShopById(id,(err,shop)=>{
		 if (err) {
		 	console.log("Error at getshopbyId");
		 	res.send(err);
		 }
		 console.log("retrived the specified shop");
		 res.send(shop);
	})
})

//edit a shop
router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Shop;
		shop.editShop(id,edit,{},(err,user) =>{
			if(err){
				console.log("ERROR at Editshop");
				res.send(err);
			}
			console.log("shop edited");
			res.send(shop);
		})
})

//delete a shop
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	shop.removeShop(id,(err,shop) =>{
		if(err){
			console.log("ERROR at deleteshop");
			res.send(err);
		}
		console.log("shop deleted");
		res.send(shop);
	})
})

module.exports = router;
