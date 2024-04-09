<?php

include "../conexion.php";

session_start();
session_destroy();
header("location: http://localhost/xdv-main//IS.php");
//include "";

?>