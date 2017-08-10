var net = require('net')  

var port = process.argv[2]; 
var strftime = require('strftime') // not required in browsers
   
var server = net.createServer(function (socket) {  
 // socket handling logic  
 var date = new Date()
 var d = strftime('%F %H:%M', date) + '\n'
 socket.end(d); 
})  
server.listen(port); 
