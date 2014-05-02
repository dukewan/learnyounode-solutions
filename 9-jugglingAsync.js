var http = require('http');

var count = 0;
var result = [];

var len = 3;
for(var i = 0; i < len; i++) {
	httpGet(i);
}

function printResult() {
	for(var i = 0; i < len; i++) {
		console.log(result[i]);	
	}
}

function httpGet(index) {
	http.get(process.argv[index + 2], function(response) {
		response.setEncoding('utf-8');
		var str = '';
		response.on('data', function(data) {
			str += data;
		});
		response.on('end', function() {
			result[index] = str;
			count++;
			if(count === 3) 
				printResult();
		});
	});		

}
