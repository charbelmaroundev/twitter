<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$follower_id = $_POST["follower_id"];
$following_id = $_POST["following_id"];



$query = $mysqli->prepare("SELECT follower_id FROM user_followers WHERE following_id = ? LIMIT 1");
$query->bind_param("s", $following_id);
$query->execute();


$result = $query -> get_result();

$num_rows = $result->num_rows;

if($num_rows != 0)
{
    echo json_encode(1);
  // "You have already followed this user";
    exit();
}

else {
  echo json_encode(0);
}
