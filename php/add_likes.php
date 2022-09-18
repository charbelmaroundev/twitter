<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$likes_id = $_POST["likes_id"];
$user_id = $_POST["user_id"];
$tweet_id = $_POST["tweet_id"];

$query = $mysqli->prepare("INSERT INTO likes(likes_id, user_id , tweet_id) VALUE (?,?,?)");
$query->bind_param("sss", $likes_id , $user_id , $tweet_id);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);

?>
