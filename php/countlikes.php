<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$tweets_tweets_id = $_POST["tweets_tweets_id"];



$query = $mysqli->prepare("SELECT COUNT(count_likes) as total_likes FROM likes WHERE tweets_tweets_id = ? LIMIT 1");
$query->bind_param("s", $tweets_tweets_id);
$query->execute();


$return = $query -> get_result();
$result = $return -> fetch_assoc();




$response = [];
$response["success"] = true;
echo json_encode($result['total_followers']);

?>
