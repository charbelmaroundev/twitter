<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");



$follower_id = $_POST["follower_id"];



$query = $mysqli->prepare("SELECT COUNT(follower_id) as total_following FROM user_follow_user WHERE follower_id = ? LIMIT 1");
$query->bind_param("s", $follower_id);
$query->execute();


$response = [];
$response["success"] = true;
echo json_encode($result['total_followers']);


?>
