<?php
session_start();
if (!empty($$_SESSION["id"])) {
    header("location: ../clientes.php");
}
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!--Librerias & Freemwares icons-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">


    <title>J-PRD</title>
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
                        <a href="report.php" class="nav-item nav-link">Reportes</a>
                        <a href="DEVICES/devices.php" class="nav-item nav-link">DP</a>
                        <a href="counter.php" class="nav-item nav-link">Contadores</a>
                        <a href="listpart/listparts.php" class="nav-item nav-link">ListPart</a>
                    </div>
                </div>
            </nav>

                <div style="margin-top: 15px; margin-bottom: 15px; margin-right: -120px;" class="btn-group" role="group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <?php
                    echo $_SESSION['user'];
                    ?>                    
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="../Conn/controlador/cerrar.php">Cerrar Sesion</a></li>
                    </ul>
                </div>
                </div>

        </div>
        </header>
        <!--Header menu end-->


                <div class="blog-container-cover">
                    <div class="container-info-cover">
                        <img src="http://localhost/xdv-main//img/imgheader/XEROX LOGO.png" alt="#" style="width: 550px; display: flex; justify-content: center; flex-wrap: wrap; ">
                    </div>
                </div>
        <br>
        <br>



        <!--sesion rama-->
        <div style="display: flex; justify-content: center; margin-top: 50px;" class="rama">
                <img style="width: 300px;" src="http://localhost/xdv-main//img/rama.png" alt="">
        </div>
        <!--sesion rama-->
                 

<br>
<br>
<br>
           


        
        
              <!--Sesion Blog Start-->
         <div class="bg-white mb-4" style="padding-left: 300px; padding-right: 300px;">
            <div class="d-flex mb-3">
            </div>
            <p  style="font-size: 48px; display: flex; justify-content: center;" class="mb-3">¿Qué es J-PRD®?</p>

            <br>

            <p style="font-size: 25px; letter-spacing: 1px;" class="text-center">
                J-PRD (Jose - Interfaz de Desarrollo para el Repositorio Primitivo) Es un software que trabaja en red diseñado para la automatización de procesos y consultas a una base de datos, remplazando un gestor de data por una interfaz agradable para el usuario. 
            </p>

            <br>
            <br>

                <div style="display: flex; font-size: 20px; letter-spacing: 1px;" class="serv"> 
                    
                    <div class="paragarm-server">
                        <p style="font-size: 25px;"><b>Servicios</b></p>
                        <p>
                            •	Instalación de la herramienta.
                            <br>
                            •	Instalación Mysql Server & Apache Server.
                            <br>
                            •	Migración de Productos, Clientes, Proveedores.
                            <br>
                            •	5 Horas iniciales de Capacitación. 
                        </p>
                    </div>
                    
                    <div style="margin-left: 150px;" class="\t"></div>

                    <div class="paragarm-server">
                        <p style="font-size: 25px;"><b>Afiliaciones</b></p>
                        <p>
                            •	Póliza eServices  (1 año).
                            <br>
                            •	Mejoras Continuas.
                            <br>
                            •	Inclusión de Módulos (Pre-implementación).
                        </p>
                    <br>
                </div>
        
            </div>
        </div>
    </div>

            <br>
           
            <div class="container-fluid">
                    <div class="container  pb-3">
                        <div class="text-center mb-3 pb-3">
                            </div>
                    
                        <div class="row">
                            
            
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="package-item bg-white mb-2">
                                    <img class="img-fluid" src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#">
                                    <div class="p-4">
                                        <div class="d-flex justify-content-between mb-2">
                                        </div>
                                        <a class="h5 text-primary text-decoration-none" href="#" style="display: flex; justify-content: center;">Automatizacion de Procesos</a>
                                        <div class="border-top mt-3 pt-4">
                                            <div class="d-flex justify-content-between">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="package-item bg-white mb-2">
                                    <img style="width: 330px; height: 235px;" class="img-fluid" src="http://localhost/xdv-main//img/panel b415.PNG" alt="#">
                                    <div class="p-4">
                                        <div class="d-flex justify-content-between mb-2">
                                        </div>
                                        <a class="h5 text-primary text-decoration-none" href="#" style="display: flex; justify-content: center;">Desarrollo de Plataformas</a>
                                        <div class="border-top mt-3 pt-4">
                                            <div class="d-flex justify-content-between">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="package-item bg-white mb-2">
                                    <img style="margin-left: -0px; width: 310px;" class="img-fluid" src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#">
                                    <div class="p-4">
                                        <div class="d-flex justify-content-between mb-2">
                                        </div>
                                        <a class="h5 text-primary text-decoration-none" href="#" style="display: flex; justify-content: center;">Transformación digital</a>
                                        <div class="border-top mt-3 pt-4">
                                            <div class="d-flex justify-content-between">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        <!-- Sesion Blog End -->



      
<br>
<br>
<br>

    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style="margin-top: 90px;">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="" class="navbar-brand">
                    <h1 class="text-primary"><span class="text-white">GRUPO</span>XDV</h1>
                </a>
                <p>Breve descripcion de la Corporación XDV "el search de abajo estara dedicado para filatrar las versiones de actualización", José Recuerda agg los objeFiltros en la barra{, Lorem ipsum dolor sit amet consectetur adioris?</p>
                <h6 class="text-white text-uppercase mt-4 mb-3" style="letter-spacing: 5px;">SIGUENOS</h6>
                <div class="d-flex justify-content-start">
                    <a class="btn btn-outline-primary btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-primary btn-square mr-2" href="https://www.facebook.com/xdv.vzla?mibextid=ZbWKwL"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-primary btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-primary btn-square" href="https://instagram.com/grupoxven?igshid=MzRlODBiNWFlZA=="><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Acceso Directo</h5>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white-50 mb-2" href="http://localhost/xdv-main//index.html"><i class="fa fa-angle-right mr-2"></i>Inicio</a>
                    <a class="text-white-50 mb-2" href="http://localhost/xdv-main//intranect.html"><i class="fa fa-angle-right mr-2"></i>J-PRD</a>
                    <a class="text-white-50 mb-2" href="http://localhost/xdv-main//Soluciones&Servicios.html"><i class="fa fa-angle-right mr-2"></i>Soluciones & Servicios</a>
                    <a class="text-white-50 mb-2" href="http://localhost/xdv-main//contacto.html"><i class="fa fa-angle-right mr-2"></i>Contactos</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Equipos</h5>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white-50 mb-2" href="http://localhost/xdv-main//Equipos/vVersalink/Equipos_Versalink.html"><i class="fa fa-angle-right mr-2"></i>Versalink</a>
                    <a class="text-white-50 mb-2" href="http://localhost/xdv-main//Equipos/Altalink/Equipos_Altalink.html"><i class="fa fa-angle-right mr-2"></i>AltaLink</a>
                    <a class="text-white-50 mb-2" href="http://localhost/xdv-main//Equipos/WC/Equipos_WorkCentre.html"><i class="fa fa-angle-right mr-2"></i>WorkCentre</a>
                    <a class="text-white-50 mb-2" href="http://localhost/xdv-main//Equipos/versant/versant.html"><i class="fa fa-angle-right mr-2"></i>Versant</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>PrimeLink</a>

                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px;">contacto</h5>
                <p><i class="fa fa-map-marker-alt mr-2"></i>Av. Ávila, Caracas 1060, Miranda, Venezuela</p>
                <p><i class="fa fa-phone-alt mr-2"></i>+58 05009376934</p>
                <p><i class="fa fa-envelope mr-2"></i>soportexdv@egrupoxven.com

                </p>
                <h6 class="text-white text-uppercase mt-4 mb-3" style="letter-spacing: 5px;">Más Información</h6>
                <div class="w-100">
                    <div class="input-group">
                        <input type="text" class="form-control border-light" style="padding: 25px;" placeholder="Email">
                        <div class="input-group-append">
                            <button class="btn btn-primary px-3">Soluicitar Información</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
        <div class="row">
            <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white-50">Copyright &copy; <a href="#" style="color: red;">José Escalona</a>. Todos los Derechos Reservados.</a>
                </p>
            </div>
            <div class="col-lg-6 text-center text-md-right">
                <p class="m-0 text-white-50">Designed by <a href="https://joseEscalona.com" style="color: red;">JE</a>
                </p>
            </div>
        </div>
    </div>
    <!-- Footer End -->





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