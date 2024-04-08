<?php

include "Conn/conexion.php";

session_start();


if (!empty($_POST['btningresar'])) {
    if (!empty($_POST['user']) AND !empty($_POST['password']) ) {
        
        $user = $_POST['user'];
        $password = $_POST['password'];

        $sql=$conexion->query(" SELECT *FROM usuarios WHERE user='$user' AND password='$password'  ");


        if ($datos=$sql->fetch_object()) {
            $_SESSION["id"]= $datos->id;
            $_SESSION["name"]= $datos->name;
            $_SESSION["surname"]= $datos->surname;
            $_SESSION["user"]= $datos->user;

            header("location: J-PRD/dashboard.php");
        } else {
            echo "<div class='alert alert-danger'>Acceso denegado<div>";
        }
        


    } else {
        echo "LLENE LOS CAMPOS FALTANTES";
    }   
    
}


?>