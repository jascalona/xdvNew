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


    <!--Librerias & Freemwares icons-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">


    <title>Clientes</title>
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




        <div style="margin-top: 3%;" class="container-fluid py-5">
            <div class="container pt-5 pb-3">
                <div class="text-center mb-3 pb-3">
                    </div>
                
                <div class="row">
                    
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-bigott.jpg" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="bigott/panel.php">Bigott</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/BBVA-Logo.png" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="BBVA/panel.html">Provincial</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-caf.jpg" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="http://localhost/xdv-main//gc/actualizacionesFirmware.html">CAF</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-defensa publica.jpg" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="DEFENSA/panel.html">Defensa Publica</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-dhl.png" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="DHL/panel.php">DHL</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-farmatodo.jpg" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="FARMATODO/panel.html">Farmatodo</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-grano.jpg" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="GRANO ALTO/panel.html">Grano Alto</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-HUAWEI.png" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="huawei/panel.php">Huawei</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-kpmg.png" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="KPMG/panel.html">KPMG</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo-polar.jpg" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="POLAR/panel.html">Polar</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="http://localhost/xdv-main//img/clientes/logo_mi_banco_GRIS.png" alt="#">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Caracas</small>
                                </div>
                                <a class="h5 text-decoration-none text-primary" href="http://localhost/xdv-main//J-PRD/Mi Banco/panel.php">Mi Banco</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- servicios scanner End -->














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