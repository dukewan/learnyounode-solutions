var http = require('http');
var url = require('url');

var parsetime = function(res, query) {
	var time = new Date(query.iso);
	var json = {
		'hour': time.getHours(),
		'minute': time.getMinutes(),
		'second': time.getSeconds()
	};
	res.end(JSON.stringify(json));
}


var unixtime = function(res, query) {
	var json = { 
		'unixtime': (new Date(query.iso).getTime()) 
	};
	res.end(JSON.stringify(json));
}

var route = function(req, res) {
	var result = url.parse(req.url, true);
	var query = result.query;
	var path = result.pathname;

	switch(path) {
		case '/api/parsetime' :
			parsetime(res, query);
			break;
		case '/api/unixtime' :
			unixtime(res, query);
			break;
		default:
			break;
	}	
}

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	route(req, res);
});

server.listen(process.argv[2]);
