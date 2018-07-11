const express = require("Express");
const router = express.Router();
const customer = require("../models/customer")

// add customer
router.post('/add',(req,res)=>{
	let obj = req.body.Customer;
	customer.addCustomer(obj,(err,customer)=>{
		 if (err) {
		 	console.log("Error at addCustomer");
		 	res.send(err);
		 }
		 console.log("new user in db");
		 res.send(customer);
	})
})

// get all customers
router.get('/',(req,res)=>{
	customer.getCustomers((err,customers)=>{
		 if (err) {
		 	console.log("Error at getCustomers");
		 	res.send(err);
		 }
		 console.log("retrieved all Customers");
		 res.send(customers);
	})
})

// get a specific customer
router.get('/:id',(req,res)=>{
	let id = req.params.id;
	customer.getCustomerById(id,(err,customer)=>{
		 if (err) {
		 	console.log("Error at getCustomerbyId");
		 	res.send(err);
		 }
		 console.log("retrived the specified Customer");
		 res.send(customer);
	})
})

//edit a customer
router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Customer;
		customer.editCustomer(id,edit,{},(err,customer) =>{
			if(err){
				console.log("ERROR at EditCustomer");
				res.send(err);
			}
			console.log("Customer edited");
			res.send(customer);
		})
})

//delete a customer
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	customer.removeCustomer(id,(err,customer) =>{
		if(err){
			console.log("ERROR at deleteCustomer");
			res.send(err);
		}
		console.log("Customer deleted");
		res.send(customer);
	})
})

module.exports = router;
