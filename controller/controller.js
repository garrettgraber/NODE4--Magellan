var site = require('../model/site.js');

console.log(site);

var controller = (function() {

	var currentLocation = 0;

	var next = function(req, res) {
		res.redirect('/');
		if(currentLocation < site.length - 1) {
			currentLocation += 1;
			console.log('next has fired');
		}
		else {
			console.log('at end');
		}
	}
	var previous = function(req, res) {
		res.redirect('/');
		if(currentLocation > 0) {
			currentLocation -= 1;
		}
		else {
			console.log('at beginning');
		}	
	}

	return {
		indexRoute: function(req, res) {
			res.render('index', {
				siteName: site[currentLocation]
			})
		},
		next:next,
		previous:previous
	};
})();

module.exports = controller;