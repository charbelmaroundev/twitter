<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$username = $_POST["username"];
$password = $_POST["password"];
$password = hash("sha256", $_POST["password"]);
$password .= "a";


$query = $mysqli->prepare("SELECT id FROM users WHERE username = ? and password = ? LIMIT 1");
$query->bind_param("ss", $username, $password);
$query->execute();

$return = $query -> get_result();
$result = $return -> fetch_assoc();


echo json_encode($result['id']);
?>