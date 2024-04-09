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
            echo '<div style="background: rgb(190, 34, 34, 0.542); position: absolute; padding: 10px; margin-top: -30px; margin-left: -25px;" class="alert alert-danger">ACCESO DENEGADO. "COMUNIQUESE CON EL ADMINISTRADOR DE SISTEMA"</div>';
        }
        


    } else {
        echo "LLENE LOS CAMPOS FALTANTES";
    }   
    
}


?>