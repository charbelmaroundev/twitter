<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$id = $_POST["id"];

$query = $mysqli->prepare("SELECT tweets.tweet_text, tweets.tweet_image, tweets.user_id
FROM user_followers 
JOIN users 
ON user_followers.follower_id = users.id 
JOIN tweets 
ON user_followers.following_id = tweets.user_id 
WHERE users.id = ?");

$query->bind_param("s", $id);
$query->execute();

$array = $query->get_result();


$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

echo json_encode($response);

?>
