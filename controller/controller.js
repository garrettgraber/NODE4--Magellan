var site = require('../model/site.js');

console.log(site);

var controller = (function() {

	var currentLocation = 0;

	return {
		indexRoute: function(req, res) {
			res.render('index', {
				siteName: site[currentLocation]
			})
		},
	};
})();

module.exports = controller;