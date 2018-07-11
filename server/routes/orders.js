const express = require("Express");
const router = express.Router();
const order = require("../models/order")

// add order
router.post('/add',(req,res)=>{
	let obj = req.body.Order;
	order.addOrder(obj,(err,order)=>{
		 if (err) {
		 	console.log("Error at addorder");
		 	res.send(err);
		 }
		 console.log("new order in db");
		 res.send(order);
	})
})

// get all orders
router.get('/',(req,res)=>{
	order.getOrders((err,orders)=>{
		 if (err) {
		 	console.log("Error at getorder");
		 	res.send(err);
		 }
		 console.log("retrieved all orders");
		 res.send(orders);
	})
})

// get a specific order
router.get('/:id',(req,res)=>{
	let id = req.params.id;
	order.getOrderById(id,(err,order)=>{
		 if (err) {
		 	console.log("Error at getorderbyId");
		 	res.send(err);
		 }
		 console.log("retrived the specified order");
		 res.send(user);
	})
})

//edit a order
router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Order;
		order.editOrder(id,edit,{},(err,order) =>{
			if(err){
				console.log("ERROR at Editorder");
				res.send(err);
			}
			console.log("order edited");
			res.send(order);
		})
})

//delete a order
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	order.removeOrder(id,(err,order) =>{
		if(err){
			console.log("ERROR at deleteorder");
			res.send(err);
		}
		console.log("order deleted");
		res.send(order);
	})
})

module.exports = router;
