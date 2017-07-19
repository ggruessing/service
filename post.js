var http = require("http")

var fs = require("fs")

var PORT = 8080

var server = http.createServer(function(req,res){
	var method = req.method
	var output = ""
	var requestData = ""

	req.on("data", function(data){
		requestData += data.fname
	})

	req.on("end", function(){
		output = "Method: "+method+"Data: "+requestData
		console.log(output)
		fs.readFile(__dirname+"/index.html",function(err,data){
		res.writeHead(200 , {"Content-Type":"text/html"})
		res.end(data)
	})	
		
	})
})

server.listen(PORT , function(){
	console.log(PORT)
})