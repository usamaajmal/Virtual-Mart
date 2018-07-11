const express = require("Express");
const router = express.Router();
const sale = require("../models/sale")

// add sale
router.post('/add',(req,res)=>{
	let obj = req.body.Sale;
	sale.addSale(obj,(err,sale)=>{
		 if (err) {
		 	console.log("Error at addsale");
		 	res.send(err);
		 }
		 console.log("new sale in db");
		 res.send(sale);
	})
})

// get all sales
router.get('/',(req,res)=>{
	sale.getSales((err,sales)=>{
		 if (err) {
		 	console.log("Error at getsales");
		 	res.send(err);
		 }
		 console.log("retrieved all sales");
		 res.send(sales);
	})
})

// get a specific sale
router.get('/:id',(req,res)=>{
	let id = req.params.id;
	sale.getSaleById(id,(err,sale)=>{
		 if (err) {
		 	console.log("Error at getsalebyId");
		 	res.send(err);
		 }
		 console.log("retrived the specified sale");
		 res.send(sale);
	})
})

//edit a sale
router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Sale;
		sale.editSale(id,edit,{},(err,sale) =>{
			if(err){
				console.log("ERROR at Edit sale");
				res.send(err);
			}
			console.log("sale edited");
			res.send(sale);
		})
})

//delete a sale
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	sale.removeSale(id,(err,sale) =>{
		if(err){
			console.log("ERROR at delete sale");
			res.send(err);
		}
		console.log("sale deleted");
		res.send(sale);
	})
})

module.exports = router;
