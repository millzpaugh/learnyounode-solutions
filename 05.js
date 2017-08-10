var fs = require('fs');  

function readFileDir(path, extension, callback){

	var rgx = RegExp('\\.' + extension + '$');
	var results = [];
	fs.readdir(path, function(err, files) {
		if (err) return callback(err, null);
		
		files.forEach(function(f){
			if(rgx.test(f)){
				results.push(f);
			}
		}); 

		return callback(null, results);

	});
}

module.exports = readFileDir; 

// listed solution 
// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })