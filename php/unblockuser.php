<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$user_id = $_POST["user_id"];
$blocked_id = $_POST["blocked_id"];


$query = $mysqli->prepare("DELETE  FROM user_blocks WHERE user_id = ? and blocked_id = ?");
$query->bind_param("ss", $user_id , $blocked_id);
$query->execute();


$response = [];
$response["success"] = true;
echo json_encode($response);

?>
