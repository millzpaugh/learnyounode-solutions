var readFileDir = require('./05.js')  

var path = process.argv[2]
var extension = process.argv[3]
readFileDir(path, extension, function(err, results){
	results.forEach(function(f){
		console.log(f);
	})
}); 
