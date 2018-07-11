const express = require("Express");
const router = express.Router();
const productOrder = require("../models/productOrder")

// add productOrder
router.post('/add',(req,res)=>{
	let obj = req.body.ProductOrder;
	productOrder.addProductOrder(obj,(err,productOrder)=>{
		 if (err) {
		 	console.log("Error at addproductOrder");
		 	res.send(err);
		 }
		 console.log("new productOrder in db");
		 res.send(productOrder);
	})
})

// get all productOrders
router.get('/',(req,res)=>{
	productOrder.getProductOrders((err,productOrders)=>{
		 if (err) {
		 	console.log("Error at getproductOrders");
		 	res.send(err);
		 }
		 console.log("retrieved all productOrders");
		 res.send(productOrders);
	})
})

// get a specific productOrder
router.get('/:id',(req,res)=>{
	let id = req.params.id;
	productOrder.getProductOrderById(id,(err,productOrder)=>{
		 if (err) {
		 	console.log("Error at getproductOrderbyId");
		 	res.send(err);
		 }
		 console.log("retrived the specified productOrder");
		 res.send(productOrder);
	})
})

//edit a productOrder
router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.ProductOrder;
		productOrder.editProductOrder(id,edit,{},(err,productOrder) =>{
			if(err){
				console.log("ERROR at EditproductOrder");
				res.send(err);
			}
			console.log("productOrder edited");
			res.send(productOrder);
		})
})

//delete a productOrder
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	productOrder.removeProductOrder(id,(err,productOrder) =>{
		if(err){
			console.log("ERROR at deleteproductOrder");
			res.send(err);
		}
		console.log("productOrder deleted");
		res.send(productOrder);
	})
})

module.exports = router;
