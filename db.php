<?php

$host = "localhost";
$dbname = "agriculture_management";
$username = "root";
$password = "";

$mysqli = new mysqli(hostname: $host,
                     username: $username,
                     password: $password,
                     database: $dbname);
                     
if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}else{
    echo "Connection Successful";
}

return $mysqli;

?>