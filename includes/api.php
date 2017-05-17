<?php  
	class Yelp{
		
		public function getReviews()
		{
			$curl = curl_init();

			curl_setopt_array($curl, array(
			  CURLOPT_URL => "https://api.yelp.com/v3/businesses/<businessID>/reviews",
			  CURLOPT_RETURNTRANSFER => true,
			  CURLOPT_ENCODING => "",
			  CURLOPT_MAXREDIRS => 10,
			  CURLOPT_TIMEOUT => 30,
			  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			  CURLOPT_CUSTOMREQUEST => "GET",
			  CURLOPT_HTTPHEADER => array(
			    "authorization: Bearer <your_api_key>",
			    "cache-control: no-cache",
			    "postman-token: 00f2b7eb-a8b0-99a2-14a6-c094c46ea5f4"
			  ),
			));

			$response = curl_exec($curl);
			$err = curl_error($curl);
			$decoded = json_decode($response);

			curl_close($curl);

			if ($err) {
			  echo "cURL Error #:" . $err;
			} else {
			  echo json_encode($decoded);
			}
		}
	}
?>