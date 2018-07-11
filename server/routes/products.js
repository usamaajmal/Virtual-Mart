const express = require("Express");
const router = express.Router();
const product = require("../models/product")

// add product
router.post('/add',(req,res)=>{
	let obj = req.body.Product;
	product.addProduct(obj,(err,product)=>{
		 if (err) {
		 	console.log("Error at addproduct");
		 	res.send(err);
		 }
		 console.log("new product in db");
		 res.send(product);
	})
})

// get all products
router.get('/',(req,res)=>{
	product.getProducts((err,products)=>{
		 if (err) {
		 	console.log("Error at getproducts");
		 	res.send(err);
		 }
		 console.log("retrieved all products");
		 res.send(products);
	})
})

// get a specific product
router.get('/:id',(req,res)=>{
	let id = req.params.id;
	product.getProductById(id,(err,product)=>{
		 if (err) {
		 	console.log("Error at getproductbyId");
		 	res.send(err);
		 }
		 console.log("retrived the specified product");
		 res.send(product);
	})
})

//edit a product
router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Product;
		product.editProduct(id,edit,{},(err,product) =>{
			if(err){
				console.log("ERROR at Editproduct");
				res.send(err);
			}
			console.log("product edited");
			res.send(product);
		})
})

//delete a product
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	product.removeProduct(id,(err,product) =>{
		if(err){
			console.log("ERROR at deleteproduct");
			res.send(err);
		}
		console.log("product deleted");
		res.send(product);
	})
})

module.exports = router;
