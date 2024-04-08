<?php

include "Conn/conexion.php";




if (!empty($_POST['btningresar'])) {
    if (!empty($_POST['user']) AND !empty($_POST['password']) ) {
        
        $user = $_POST['user'];
        $password = $_POST['password'];

        $sql=$conexion->query(" SELECT *FROM usuarios WHERE user='$user' AND password='$password'  ");


        if ($datos=$sql->fetch_object()) {
            header("location: J-PRD/dashboard.html");
        } else {
            echo "<div class='alert alert-danger'>Acceso denegado<div>";
        }
        


    } else {
        echo "LLENE LOS CAMPOS FALTANTES";
    }
    
}


?>