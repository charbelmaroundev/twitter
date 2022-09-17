<?php


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');


include("connection.php");


$fullname = $_POST["fullname"];
$email = $_POST["email"];
$phonenumber = $_POST["phonenumber"];
$message = $_POST["message"];

$query = $mysqli->prepare("INSERT INTO users(fullname, email, phonenumber, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $fullname, $email, $phonenumber, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
