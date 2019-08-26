<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  try {
      $conexion = new PDO('mysql:host=localhost;dbname=ang_http_1;charset=UTF8', 'root', '');
      $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
      echo 'Se ha producido una excepción: '.$e->getMessage();
      die();
  }
?>
