<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal de Socios</title>
    <link rel="stylesheet" href="./css/IS.css">
    <link rel="icon" href="img/xven.jpeg">
</head>
<body>
                        
        
        <div class="container">
            <div class="img">
            </div>
            <div class="login-content">
                <form method="POST" action="">
                    <img style="width: 250px; margin-left: 150px;" src="./img/imgheader/XEROX LOGO.png" alt="">
                    <br>
                    <h2 class="title">Socios-Iniciar sesión con su Usuario de red</h2>
                       <br>
                       <br>
                    <?php
                    include "./Conn/controlador/validar.php";
                    ?>

                    <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="div">
                        <h5>Usuario</h5>
                        <input id="user" type="text" class="input" name="user" placeholder="Ingrese su Usuario" required>
                    </div>
                    </div>
                    <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                        <h5>Contraseña</h5>
                        <input type="password" id="input" class="input" name="password" placeholder="Ingrese su Contraseña" required>
                    </div>
                    </div>
                    <div class="view">
                    <div class="fas fa-eye verPassword" onclick="vista()" id="verPassword"></div>
                    </div>
                    
                    <button name="btningresar" class="btn" type="submit" value="INICIAR SESION">INICIAR</button>

                    <div style="margin-left: 100px;" class="text-center">
                    <a class="font-italic isai5" href="">Olvidé mi contraseña</a>
                    <br>
                    <a class="font-italic isai5" href="">Registrarse</a>
                    </div>
                </form>
            </div>
        </div>


</body>
</html>