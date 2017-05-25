var Yelp = require('yelp-v3');
var yelp = new Yelp({
  access_token: 'access_token',
});

module.exports = function(app){
	app.get('/reviews', function(res,req){
		yelp.businessReviews('yelp-san-francisco')
		.then(function(data){
			res.json(data);
		})
		.catch(function(error){
			res.send(error);
		});
	});
};