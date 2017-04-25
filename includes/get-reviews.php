<?php 
include ($_SERVER['DOCUMENT_ROOT'].'/includes/api.php');
$Yelp = new Yelp();
$Yelp->getReviews();
?>