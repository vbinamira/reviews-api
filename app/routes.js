var Yelp = require('yelp-v3');
var yelp = new Yelp({
  access_token: 'access_token',
});

module.exports = function(app){
	app.get('/reviews', function(res,req){
		// yelp.businessesReviews('4zD8uwQd1RCbpN1l0fJ64A', function(error, data) {

		// });
		yelp.businessReviews('4zD8uwQd1RCbpN1l0fJ64A')
			.then(function(data){
			res.json(data);
			})
			.catch(function(error){
				res.send(error);
			});
	});
};