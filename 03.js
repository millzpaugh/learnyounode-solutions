var fs = require('fs');  

function readFile(path){
	buf = fs.readFileSync(path); 
	var str = buf.toString(); 
	var lines = str.split('\n');
	console.log(lines.length-1)
	return lines.length -1 
}

var path = process.argv[2]
readFile(path);
