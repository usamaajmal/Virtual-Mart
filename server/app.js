// dependices
const express = require("Express");
const mongoose=require("Mongoose")
const bodyParser = require("Body-parser");
const app = express();

// local dependices 
const user = require('./routes/users');

//port
const port = process.env.PORT || 3000;

//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

//app.use(express.static(__dirname + ''))

/*user defined routes */ 
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