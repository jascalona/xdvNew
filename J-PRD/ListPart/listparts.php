<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="http://localhost/xdv-main/img/xven.jpeg">
    <link rel="stylesheet" href="http://localhost/xdv-main/css/style.css">
    <link rel="stylesheet" href="http://localhost/xdv-main/css/suministros.css">
    <link rel="stylesheet" href="http://localhost/xdv-main/css/xdv.css">
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
                        <a href="http://localhost/xdv-main//J-PRD/dashboard.html" class="nav-item nav-link ">J-PRD</a>
                        <a href="http://localhost/xdv-main//J-PRD/clientes.html" class="nav-item nav-link ">Clientes</a>
                        <a href="http://localhost/xdv-main//Soluciones&Servicios.html" class="nav-item nav-link">Reportes</a>
                        <a href="../DEVICES/devices.php" class="nav-item nav-link">DP</a>
                        <a href="http://localhost/xdv-main//Soluciones&Servicios.html" class="nav-item nav-link">Contadores</a>
                        <a href="../ListPart/listparts.php" class="nav-item nav-link">ListPart</a>

                    </div>
                </div>
            </nav>
        </div>
        </header>
        <!--Header menu end-->



        <div class="blog-container-cover">
            <div class="container-info-cover">
                <img src="http://localhost/xdv-main//img//imgheader/XEROX LOGO.png" alt="#" style="width: 550px; display: flex; justify-content: center; flex-wrap: wrap; ">
            </div>
        </div>


            <!--FILTER-PHP-->
                <div class="container is-fluid" style="margin-left: 215px;" >
                    <div class="container-fluid">
                        <h4 style="font-size: 50px; padding-top: 30px;">ListPart</h4>
                    <form class="d-flex" style="margin-top: -20px;">
                        <form action="" method="GET">
                                <input style="margin-top: 50px; border: solid rgb(128, 125, 125, 0.324); margin-left: 150px; color: grey;" class="form-control me-2" type="search" placeholder="Buscar Producto" name="busqueda">
                                <button style="margin-top: 50px; padding: 16px; margin-right: 290px; background-color: brown; cursor: pointer; border: none; " type="submit" name="enviar">Buscar</button> 
                                <button style="margin-top: 50px; background-color: brown; cursor: pointer; border: none; margin-left: -250px; " type="submit" name="limpiar">Limpiar Filtro</button> 
                            </form>
                    </div>

                    <?php
                    $conexion=mysqli_connect("localhost","root","","pj"); 
                    $where="";

                    if(isset($_GET['enviar'])){
                    $busqueda = $_GET['busqueda'];

                    if(isset($_GET['limpiar'])){
                        $limpiar = $_GET['busqueda'];
                    }

                    if (isset($_GET['busqueda']))
                    {
                    $where="WHERE PartN LIKE'%".$busqueda."%' OR Model  LIKE'%".$busqueda."%'
                    OR SeG  LIKE'%".$busqueda."%'  OR Region  LIKE'%".$busqueda."%' OR PerF LIKE'%".$busqueda."%' ";
                    }

                    }
                    ?>
                    <br>

                <!--FILTER 
                    </form>
                    <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2 light-table-filter" data-table="table_id" type="text" 
                        placeholder="Buscar">
                        <hr>
                        </form>
                    </div>
                    JS-->
                    
                    <br>
                    <table style="margin-left: 130px; margin-top: 70px;" class="table table-bordered table_id ">

                        
                        <thead>    
                            <tr>
                                <th>PartN</th>
                                <th>EAS</th>
                                <th>Model</th>
                                <th>SeG</th>
                                <th>Mo/Co</th>
                                <th>Description</th>
                                <th>PerF</th>
                                <th>Region</th>
                            </tr>
                        </thead>

                        <tbody>

                    <?php

                    $conexion=mysqli_connect("localhost","root","","pj");               
                    $SQL="SELECT listpart.PartN, listpart.EAS, listpart.Model, listpart.SeG, listpart.Mo_Co,
                    listpart.DesC, listpart.PerF, listpart.Region FROM listpart
                    $where";
                    $dato = mysqli_query($conexion, $SQL);

                    if($dato -> num_rows >1){
                    while($fila=mysqli_fetch_array($dato)){
                    
                    ?>
                        <tr>
                        <td><?php echo $fila['PartN']; ?></td>
                        <td><?php echo $fila['EAS']; ?></td>
                        <td><?php echo $fila['Model']; ?></td>
                        <td><?php echo $fila['SeG']; ?></td>
                        <td><?php echo $fila['Mo_Co']; ?></td>
                        <td><?php echo $fila['DesC']; ?></td>
                        <td><?php echo $fila['PerF']; ?></td>
                        <td><?php echo $fila['Region']; ?></td>

                        </tr>


                    <?php
                    }
                    }else{

                    ?>
                    <tr class="text-center">
                    <td colspan="16">No existen registros</td>
                    </tr>

                    <?php
    
                    }

                    ?>
                            


   

            <script src="../ListPart/controlador/script.js" ></script>    
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

</body>
</html>