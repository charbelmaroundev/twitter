<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


//$user_id = $_POST["user_id"];
$blocked_id = $_POST["blocked_id"];


$query = $mysqli->prepare("SELECT  user_id FROM user_blocks WHERE blocked_id = ? LIMIT 1");
$query->bind_param("s" , $blocked_id);
$query->execute();



$result = $query -> get_result();

$num_rows = $result->num_rows;

if($num_rows != 0)
{
    echo json_encode(1);
  // "You have already blocked this user";
    exit();
}

else {
  echo json_encode(0);
}
