var http = require('http');

http.get(process.argv[2], function(response) {
	response.setEncoding('utf-8');
	var str = '';
	response.on('data', function(data) {
		str += data;
	});
	response.on('end', function() {
		console.log(str.length);
		console.log(str);
	});

});
