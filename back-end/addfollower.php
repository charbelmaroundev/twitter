<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$follower_id = $_POST["follower_id"];
$following_id = $_POST["following_id"];


$query = $mysqli->prepare("INSERT INTO user_followers(follower_id , following_id) VALUE (?,?)");
$query->bind_param("ss", $follower_id , $following_id);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);

?>