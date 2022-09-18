<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$users_id = $_POST["users_id"];
$users_id1 = $_POST["users_id1"];


$query = $mysqli->prepare("INSERT INTO users_has_users(users_id , users_id1) VALUE (?,?)");
$query->bind_param("ss", $users_id , $users_id1);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);

?>
