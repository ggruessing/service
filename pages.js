var url = require("url");

var http = require("http");

var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT , function(){
	console.log("Sick shit, listening on: "+PORT)
})

function handleRequest(req,res){

	var path = url.parse(req.url)

	console.log("WE GOT A BITE CAP'N, they be lookin at: "+path.pathname)

	switch (path.pathname) {
		case "/":
			home(path.pathname, req, res);
			break;
		case "/food":
			food(path.pathname, req, res);
			break;
		case "/movies":
			movies(path.pathname, req, res)
			break;
	}
}

function home(url,req,res){
	fs.readFile(__dirname+"/home.html",function(err,data){
		res.writeHead(200 , {"Content-Type":"text/html"})
		res.end(data)
	})	
}

function food(url,req,res){
	fs.readFile(__dirname+"/food.html",function(err,data){
		res.writeHead(200 , {"Content-Type":"text/html"})
		res.end(data)
	})
}

function movies(url,req,res){
	fs.readFile(__dirname+"/movies.html",function(err,data){
		res.writeHead(200 , {"Content-Type":"text/html"})
		res.end(data)
	})
}