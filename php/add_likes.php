<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$tweets_tweets_id = $_POST["tweets_tweets_id"];
$users_id = $_POST["users_id"];

$query = $mysqli->prepare("INSERT INTO user_follow_user(users_id , tweets_tweets_id , count_likes) VALUE (?,?,?)");
$query->bind_param("ss", $follower_id , $following_id,"1");
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);

?>