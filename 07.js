var http = require('http');

function retrieveRandomData(url, callback){
	http.get(url, function(request){
		request.setEncoding("utf8");
		request.on("data", function(data){
			console.log(data); 
		})
		response.on('error', console.error)
	});
}; 

var url = process.argv[2];

retrieveRandomData(url, function(err, results){
	console.log(results);
})