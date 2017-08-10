var fs = require('fs');  

function readFile(path){
	fs.readFile(path, function(err, data) {
	  console.log(data.toString().split('\n').length - 1);
	});
}

var path = process.argv[2]
readFile(path); 
