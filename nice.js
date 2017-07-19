var http = require("http")

var nicePORT = 7000

var meanPORT = 7500

function niceRequest(request , response){	
	console.log(request.url)
		response.end("Oh Hey, It works"+ request.url+" , good job!")
}

function meanRequest(request , response){
	console.log(request.url)
		response.end("request url is: "+request.url+" , stupid.")
}

var niceServer = http.createServer(niceRequest)

var meanServer = http.createServer(meanRequest)

niceServer.listen(nicePORT , function(){
	console.log("Hey gorgeous, server listening on: http://localhost:%s" , nicePORT)
})

meanServer.listen(meanPORT , function() {
	console.log("Sup ugly, server listening on: http://localhost:%s" , meanPORT)
})