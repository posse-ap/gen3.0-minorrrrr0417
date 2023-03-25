<?php 
declare(strict_types = 1);


// PDOの設定を呼び出す
require('../dbconnect.php');


try {
  $Day = $_POST["Day"];
  $StudyTime = $_POST["studytime"];
  $contents=(int)$_POST["Contents"];
  $contents=(int)$_POST["Languages"];
  
  $sql = "INSERT INTO StudyTime (Day, Contents,Languages, StudyHour) VALUES (:Day, :Contents, :Languages, :StudyHour)";
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(":Day", $Day);
    $stmt->bindParam(":Contents", $contents);
    $stmt->bindParam(":Languages", $Languages);
    $stmt->bindParam(":StudyHour", $StudyTime);
    $stmt->execute();
  


    header('Location: ./');
  } catch (PDOException $e) {
    echo $e->getMessage();
    die();
  }
?>