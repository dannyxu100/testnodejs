var express = require("express");
var app = express();

app.set("port", process.env.PORT || 80);

//设置ejs视图引擎
// var path = require('path');
// app.set('views', path.join(__dirname, 'public'));

//app.set('views', __dirname);
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');  



app.get("/", function( req, res ){
	res.render("home", {
		"title"	:	"HOME",
		"body"	:	"My WebSite"
	});
});


app.get("/about", function( req, res ){
	res.render("about");
});


//定制404页面
app.use(function( req, res ){
	res.status(404);
	res.render("404");

});

//定制500页面
app.use(function( err, req, res, next ){
	console.error(err.stack);
	
	res.status(500);
	res.render("500");
	
});

app.listen( app.get("port"), function(){
	console.log('Express started on http://localhost:'+ app.get('port') +'; press ctrl+c to terminate.');
	
});