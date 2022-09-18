<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$tweet_text = $_POST["tweet_text"];
$tweet_image = $_POST["tweet_image"];
$user_id = $_POST["user_id"];


$query = $mysqli->prepare("INSERT INTO tweets(tweet_text , tweet_image, user_id) VALUE (?, ?, ?)");
$query->bind_param("sss", $tweet_text , $tweet_image, $user_id);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);

?>
