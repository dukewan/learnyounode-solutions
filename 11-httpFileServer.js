var http = require('http');
var fs = require('fs');

var server = http.createServer(function(requset, response) {
	fs.createReadStream(process.argv[3]).pipe(response);	
});

server.listen(process.argv[2]);
