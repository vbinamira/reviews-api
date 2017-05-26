$.ajax({
	url: '/reviews',
})
.done(function(data) {
	var raw = $.parseJSON(data);
	var total = raw.total
	var reviews = raw.reviews
	for (var i = 0; i < reviews.length; i++) 
	{
		var text = reviews[i].text
		var link = reviews[i].url
		var name =  reviews[i].user.name
		var ratings = reviews[i].rating
		if (ratings == 5) 
		{
			var imgsrc = 'dist/img/regular/regular_5.png'
			var paragraph = "<div class='col-md-12'><div class='testimonial-home'><div class='review-text col-md-10'><p>" + text + "<a href="+ link +"> Read More</a></p><div class='col-md-4'><img id='review-rating' src="+ imgsrc +" alt='...' class='img-responsive'></div><div class='col-md-4'><p><i>" + total + " Reviews </i></p></div><div class='col-md-4'><p class='review-name'> - " + name + "<a href='https://www.yelp.com/biz/zombie-burlesque-las-vegas'><img src='dist/img/Yelp_burst_positive_RGB.png' class='review-logo'></a></p></div></div></div></div>";
			$(paragraph).appendTo('#review-container');
		} 
		else if(ratings == 4)  
		{
			imgsrc = 'dist/img/regular/regular_4.png'
			var paragraph = "<div class='col-md-12'><div class='testimonial-home'><div class='review-text col-md-10'><p>" + text + "<a href="+ link +"> Read More</a></p><div class='col-md-4'><img id='review-rating' src="+ imgsrc +" alt='...' class='img-responsive'></div><div class='col-md-4'><p><i>" + total + " Reviews </i></p></div><div class='col-md-4'><p class='review-name'> - " + name + "<a href='https://www.yelp.com/biz/zombie-burlesque-las-vegas'><img src='dist/img/Yelp_burst_positive_RGB.png' class='review-logo'></a></p></div></div></div></div>";
			$(paragraph).appendTo('#review-container');
		}
		else if(ratings == 3)  
		{
			imgsrc = 'dist/img/regular/regular_3.png'
			var paragraph = "<div class='col-md-12'><div class='testimonial-home'><div class='review-text col-md-10'><p>" + text + "<a href="+ link +"> Read More</a></p><div class='col-md-4'><img id='review-rating' src="+ imgsrc +" alt='...' class='img-responsive'></div><div class='col-md-4'><p><i>" + total + " Reviews </i></p></div><div class='col-md-4'><p class='review-name'> - " + name + "<a href='https://www.yelp.com/biz/zombie-burlesque-las-vegas'><img src='dist/img/Yelp_burst_positive_RGB.png' class='review-logo'></a></p></div></div></div></div>";
			$(paragraph).appendTo('#review-container');
		}
		else if(ratings == 2)  
		{
			imgsrc = 'dist/img/regular/regular_2.png'
		}
		else
		{
			imgsrc = 'dist/img/regular/regular_1.png'
		}
	}
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
