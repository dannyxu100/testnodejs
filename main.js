var express = require("express");
var app = express();

app.set("port", process.env.PORT || 80);

app.get("/", function( req, res ){
	res.type("text/plain");
	res.send("My WebSite");
});

app.get("/about", function( req, res ){
	res.type("text/plain");
	res.send("About My WebSite");
});




//定制404页面
app.use(function( req, res ){
	res.type("text/plain");
	res.status(404);
	res.send("404 - not found");

});

//定制500页面
app.use(function( err, req, res, next ){
	console.error(err.stack);
	
	res.type("text/plain");
	res.status(500);
	res.send("500 - Server Error");
	
});

app.listen( app.get("port"), function(){
	console.log('Express started on http://localhost:'+ app.get('port') +'; press ctrl+c to terminate.');
	
});