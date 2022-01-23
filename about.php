<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Styles / Icons -->
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/queries.css">
    <link rel="icon" href="images/logo.png"></link>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <!-- Scripts -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/a68fd8b5df.js" crossorigin="anonymous"></script>
    <script src="index.js"></script>
    <!-- Site Meta -->
    <meta name="title" content="West Canada Art Centre">
    <meta name="description" content="A non-profit society based in Edmonton, Alberta that seeks to spread creativity among youth and foster the love of art.">
    <meta name="keywords" content="west canada art centre, art centre, chinese school">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="theme-color" content="#ffe54c">
    <meta name="image" content="https://temp-wcac.herokuapp.com/images/2019-group.jpg">
    <!-- Facebook / Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://temp-wcac.herokuapp.com/">
    <meta property="og:title" content="West Canada Art Centre">
    <meta property="og:description" content="A non-profit society based in Edmonton, Alberta that seeks to spread creativity among youth and foster the love of art.">
    <meta property="og:image" content="https://temp-wcac.herokuapp.com/images/2019-group.jpg">
    <meta property="og:url" content="https://temp-wcac.herokuapp.com/">
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://temp-wcac.herokuapp.com/">
    <meta property="twitter:title" content="West Canada Art Centre">
    <meta property="twitter:description" content="A non-profit society based in Edmonton, Alberta that seeks to spread creativity among youth and foster the love of art.">
    <meta property="twitter:image" content="https://temp-wcac.herokuapp.com/images/2019-group.jpg">
    <title>West Canada Art Centre | About</title>
</head>
<body>
    <div class="navbar">
        <div class="logo_container">
            <img src="images/logo.png" alt="" class="logo" style="cursor:pointer">
            <span style="cursor:pointer">West Canada Art Centre</span>
        </div>
        <div class="links">
            <a class="navbar_link" href="home">
                <span>Home</span>
            </a>
            <a class="navbar_link" id="about">
                <span>About</span>
            </a>
            <a class="navbar_link" href="extracurriculars">
                <span>ECAs</span>
            </a>
        </div>
    </div>
    <div class="p" id="popup"><a href="https://inlowik.herokuapp.com" target="_blank">Website by me ^-^</a><br><span>Had to plug myself (￣∇￣)</span></div>
    <img src="images/popup.png" alt="" class="popup" onclick="document.getElementById('popup').classList.toggle('toggleShow')">
    <script>
        $("#about").click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 0);
        });
    </script>
</body>
</html>

<?php echo ''; ?>