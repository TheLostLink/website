var express = require('express');
var path = require('path'); 
var app = express();
var ejs = require('ejs');



//set port
var port = process.env.PORT || 8080;


//app.set('views', path.join(__dirname, 'public'));

//app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));


//routes
app.get("/", function(req, res){
	res.render("index");
})


app.listen(port, function(){
	console.log("app running");
})