// dependices
const express = require("Express");
const mongoose=require("Mongoose")
const bodyParser = require("Body-parser");
var cors = require('cors')
var app = express()
 
app.use(cors())

// local dependices 
const user = require('./routes/users');
const customer = require('./routes/customers');
const order = require('./routes/orders');
const productOrder = require('./routes/productOrders');
const product = require('./routes/products');
const sale = require('./routes/sales');
const shopkeeper = require('./routes/shopkeepers');
const shop = require('./routes/shops');


//port
const port = process.env.PORT || 3000;

//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

//app.use(express.static(__dirname + ''))

/*user defined routes */ 
app.use('/customer',customer);
app.use('/order',order);
app.use('/productOrder',productOrder);
app.use('/product',product);
app.use('/sale',sale);
app.use('/shopkeeper',shopkeeper);
app.use('/shop',shop);
app.use('/user',user);


//mongoose connection string
mongoose.connect("mongodb://toor:root123@ds018848.mlab.com:18848/vm").then(
	() => {
	console.log("DB connected..!!!");	
	},
	err => {
	console.log("Error in DB Connectivity : "  + err);
});

//running server
app.listen(port, ()=>{
	console.log('Running on port '+port)
})