<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal de Socios</title>
    <link rel="stylesheet" href="http://localhost/xdv-main///css/IS.css">
    <link rel="icon" href="img/xven.jpeg">
</head>
<body>
                        
        
        <div class="container">
            <div class="img">
            </div>
            <div class="login-content">
                <form method="POST" action="">
                    <img src="/img/user.svg">
                    <h2 class="title">PORTAL PARA SOCIOS</h2>

                    <?php
                    include "./Conn/controlador/validar.php";
                    ?>

                    <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="div">
                        <h5>Usuario</h5>
                        <input id="user" type="text" class="input" name="user">
                    </div>
                    </div>
                    <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                        <h5>Contraseña</h5>
                        <input type="password" id="input" class="input" name="password">
                    </div>
                    </div>
                    <div class="view">
                    <div class="fas fa-eye verPassword" onclick="vista()" id="verPassword"></div>
                    </div>

                    <div class="text-center">
                    <a class="font-italic isai5" href="">Olvidé mi contraseña</a>
                    <a class="font-italic isai5" href="">Registrarse</a>
                    </div>
                    <button name="btningresar" class="btn" type="submit" value="INICIAR SESION">INICIAR</button>
                </form>
            </div>
        </div>


</body>
</html>