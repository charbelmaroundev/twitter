<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$image = $_POST["image"];
// $password = hash("sha256", $_POST["password"]);
// $password .= "a";


$query = $mysqli->prepare("INSERT INTO users(firstname, lastname, image) VALUE (?, ?, ?)");
$query->bind_param("sss", $firstname, $lastname, $image);
$query->execute();


$response = [];
$response["success"] = true;

echo json_encode($response);

?>