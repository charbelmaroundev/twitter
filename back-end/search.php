<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$search = $_POST["search"];
$search = "%".$search."%";

$query = $mysqli->prepare("SELECT id, firstname, lastname, username, image FROM users WHERE firstname LIKE ? or lastname LIKE ? or username LIKE ?");
$query->bind_param("sss", $search, $search, $search);
$query->execute();

$array = $query->get_result();


$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

echo json_encode($response);

?>