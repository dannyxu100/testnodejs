var http = require("http");
http.createServer(function(req,res){
	//¹ıÂË²éÑ¯×Ö·û´®
	var path = req.url.replace(/\/?(?:\?.*)?$/,"").toLowerCase();
	
	switch( path ){
		case "":
			res.writeHead(200, {"content-type":"text/plain"});
			res.end("Homepage");
			break;
		case "/about":
			res.writeHead(200, {"content-type":"text/plain"});
			res.end("About");
			break;
		default:
			res.writeHead(200, {"content-type":"text/plain"});
			res.end("Not Found");
			break;
	}
	
}).listen(80);

console.log("Server started on localhost:80; press Ctrl-c to terminate...");