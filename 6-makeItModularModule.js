var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, cb) {
	fs.readdir(dir, function(err, list) {
		if(err) {
			cb(err);
		} else {
			var data = [];
			list.forEach(function(file) {
				if(path.extname(file) === '.' + ext) {
					data.push(file);
				}		
			});	
			cb(null, data);
		}

	});

}
