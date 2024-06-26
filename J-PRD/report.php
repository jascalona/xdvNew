<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="http://localhost/xdv-main/img/xven.jpeg">
    <link rel="stylesheet" href="http://localhost/xdv-main/css/style.css">
    <link rel="stylesheet" href="http://localhost/xdv-main/css/suministros.css">
    <link rel="stylesheet" href="http://localhost/xdv-main/css/xdv.css">
    <link rel="stylesheet" href="http://localhost/xdv-main/css/tablas.css">
    <link rel="stylesheet" href="http://localhost/xdv-main//css/barra_busqueda.css">
    <link rel="stylesheet" href="http://localhost/xdv-main//css/J-PRD.css">
    <link rel="stylesheet" href="http://localhost/xdv-main/css/JPRD-report.css">

    <!--Librerias & Freemwares icons-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">


    <title>Report</title>
</head>
<body>
    
          <!--Header menu start-->
          <header>
            <div class="header-content">

                <div class="logo">
                    <a href="http://localhost/xdv-main//index.html"><h1>Grupo<b>XDV</b></h1></a>
                </div>

                

                <div class="menu" id="show-menu">

                </div>

            <nav class="navbar navbar-expand-lg bg-dark navbar-dark py- py-lg-0 px-xl-5">
                <a href="" class="text-decoration-none d-block d-lg-none">
            
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto py-0">
                        <a href="dashboard.php" class="nav-item nav-link ">Dashboard</a>
                        <a href="clientes.php" class="nav-item nav-link ">Clientes</a>
                        <a href="report.html" class="nav-item nav-link">IDS</a>
                        <a href="report.html" class="nav-item nav-link">Reportes</a>
                        <a href="devices/devices.php" class="nav-item nav-link">DP</a>
                        <a href="counter.php" class="nav-item nav-link">Contadores</a>
                        <a href="listpart/listparts.php" class="nav-item nav-link">ListPart</a>
                    </div>
                </div>
            </nav>

            <div style="font-size: 25px; font-weight: 600; position: relative; padding-top: 20px; margin-right: -100px;" class="name-user">
                <?php
                    echo $_SESSION['user'];
                ?>
            </div>

        </div>
        </header>
        <!--Header menu end-->

        <div class="blog-container-cover">
            <div class="container-info-cover">
                <img src="http://localhost/xdv-main//img//imgheader/XEROX LOGO.png" alt="#" style="width: 550px; display: flex; justify-content: center; flex-wrap: wrap; ">
            </div>
        </div>



        <div class="container-report">
            <div class="report">
                <a href="http://localhost/proyecto-j//reportes/LSC-GSI-PSI-FOR-004 Carta de Instalación E1-R11.xlsx"><img src="http://localhost/proyecto-j//IMG/folder.svg" alt=""></a>
                <div class="lin"></div>
            <div class="link">
                <a href="http://localhost/proyecto-j//reportes/LSC-GSI-PSI-FOR-004 Carta de Instalación E1-R11.xlsx"><p>Formato Instalacion</p></a>
            </div>
            </div>
        
            <div class="report">
                <a href="http://localhost/proyecto-j//reportes/SAC-GSI-PSI-FOR-005 Carta de Desinstalación E1-R02.xlsx"><img src="http://localhost/proyecto-j//IMG/folder.svg" alt=""></a>
                <div class="lin"></div>
                <div class="link">
                    <a href="http://localhost/proyecto-j//reportes/SAC-GSI-PSI-FOR-005 Carta de Desinstalación E1-R02.xlsx"><p>Formato Desisntalacion</p></a>
                </div>
            </div>
        
            <div class="report">
                <a href="http://localhost/proyecto-j//reportes/Formulario Control de Asistencia Inducción.xlsx"><img src="http://localhost/proyecto-j//IMG/folder.svg" alt=""></a>
                <div class="lin"></div>
                <div class="link">
                    <a href="http://localhost/proyecto-j//reportes/Formulario Control de Asistencia Inducción.xlsx"><p>Formato Control de Asistencia</p></a>
                </div>
            </div>
        </div>







        

<!-- Sesion de  JavaScript -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
<script src="lib/easing/easing.min.js"></script>
<script src="lib/waypoints/waypoints.min.js"></script>
<script src="lib/owlcarousel/owl.carousel.min.js"></script>
<script src="lib/tempusdominus/js/moment.min.js"></script>
<script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
<script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>


</body>
</html>