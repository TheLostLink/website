var express = require('express');
var path = require('path'); 
var app = express();
var engines = require('consolidate');

app.engine('html', engines.mustache);




//set port
var port = process.env.PORT || 8080;


app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
//app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));


//routes
app.get("/", function(req, res){
	res.render("index");
})


app.get("/login", function(req,res){

res.sendFile('index.html', {root: path.join(__dirname, 'public/login/')



} )

app.listen(port, function(){
	console.log("app running");
})