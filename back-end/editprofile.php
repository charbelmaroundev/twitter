<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$id = $_POST["id"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$image = $_POST["image"];

$query = $mysqli->prepare("UPDATE users SET firstname = ?  WHERE id = ? ");
$query->bind_param("ss", $firstname, $id);
$query->execute();

$query = $mysqli->prepare("UPDATE users SET lastname = ?  WHERE id = ? ");
$query->bind_param("ss", $lastname, $id);
$query->execute();

$query = $mysqli->prepare("UPDATE users SET image = ?  WHERE id = ? ");
$query->bind_param("ss", $image, $id);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>