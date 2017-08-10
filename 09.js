var retrieveRandomData = require('./08.js')  

function retrieveAsyncData (urls){
	var q = d3.queue(5);

	urls.forEach(function(url){
	  q.defer(retrieveRandomData, url);
	}) 

	q.awaitAll(function(error, results) {
  	if (error) throw error;
  	console.log(results); 
	});
}

var urls = process.argv;

retrieveRandomData(urls); 

