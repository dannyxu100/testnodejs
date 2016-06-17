var http = require("http");
var fs = require("fs");

function serveStaticFile( res, path, contentType, responseCode ){
	if(!responseCode) responseCode = 200;
	
	fs.readFile( __dirname + path, function(err, data){
		if( err ){
			res.writeHead(500, {"Content-Type":"text/plain"});
			res.end("500-Internal Error");
		}else{
			res.writeHead(responseCode, {"Content-Type":contentType});
			res.end(data);
		}
		
	});
	
}


http.createServer(function(req,res){
	var path = req.url.replace( /\/?(?:\?.*)?$/, "" ).toLowerCase();
	
	switch( path ){
		case "":
			serveStaticFile( res, "/web/home.html", "text/html" );
			break;
		case "/about":
			serveStaticFile( res, "/web/about.html", "text/html" );
			break;
		case "/node.jpg":
			serveStaticFile( res, "/public/images/node.jpg", "image/jpeg" );
			break;
		default:
			serveStaticFile( res, "/web/404.html", "text/html", 404 );
			break;
	}
	
}).listen(80);

console.log("Server started on localhost:80; press ctrl-c to terminate...");