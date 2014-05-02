var ls = require('./6-makeItModularModule');

ls(process.argv[2], process.argv[3], function(err, data) {
	if(err) {
		console.log('ls error');
	} else {
		data.forEach(function(value) {
			console.log(value);
		});
	}

});
