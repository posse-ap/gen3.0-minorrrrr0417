<?php

$dsn = 'mysql:host=db;dbname=posse';
$user = 'root';
$password = 'root';
$option = 
    [ 
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      
    ];


$dbh = new PDO($dsn, $user, $password, $option);
?>