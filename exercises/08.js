var http = require('http');

function retrieveRandomData(url){
	http.get(url, function(request){
		var result = ""; 
		request.setEncoding("utf8");
		request.on("data", function(data){
			result += data;  
		})
		request.on('error', console.error); 

		request.on('end', function(){
			console.log(result); 
		}); 

	});
}; 

module.exports = retrieveRandomData; 

// var url = process.argv[2];

// retrieveRandomData(url);