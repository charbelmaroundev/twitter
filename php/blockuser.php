<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$user_id = $_POST["user_id"];
$user_id1 = $_POST["user_id1"];


$query = $mysqli->prepare("INSERT INTO user_has_users(user_id , user_id1) VALUE (?,?)");
$query->bind_param("ss", $user_id , $user_id1);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);

?>
