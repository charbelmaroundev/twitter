<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$password = hash("sha256", $_POST["password"]);
$password .= "a";

$query1 = $mysqli->prepare("SELECT COUNT(*) as username FROM users WHERE username = ?");
$query1->bind_param("s", $username);
$query1->execute();
$return1 = $query1 -> get_result();
$result1 = $return1 -> fetch_assoc();

$query2 = $mysqli->prepare("SELECT COUNT(*) as email FROM users WHERE email = ?");
$query2->bind_param("s", $email);
$query2->execute();
$return2 = $query2 -> get_result();
$result2 = $return2 -> fetch_assoc();


$response = [];

?>
