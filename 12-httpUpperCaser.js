var http = require('http');
var map = require('/usr/local/lib/node_modules/through2-map');

var server = http.createServer(function(request, response) {
	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(process.argv[2]);
