<!DOCTYPE html>
<html>
    <head>
        <title>Joel Engström</title>
        <link rel="stylesheet" href="Styling.css">
        <link rel="icon" href="UnityIcon.png">
        <meta name="viewport" content="width=device-width, inital-scale=!">
        <!--jQuery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!--jQuery Color plugin-->
        <script src="https://code.jquery.com/color/jquery.color-2.1.2.js" integrity="sha256-1Cn7TdfHiMcEbTuku97ZRSGt2b3SvZftEIn68UMgHC8=" crossorigin="anonymous"></script>
        <!--Min Script fil-->
        <script src="script.js"></script>
    </head>

    <?php
    require_once "config.php";
    ?>

    <body>
        <div class="FlexBox-Container">
            <header class="Header">
                <nav class="NavList">
                    <ul class="NavUl">
                        <li id="navItem3"><a href="./index.php"> Hem</a></li>
                        <li id="navItem2"><a href="./about.html"> Om mig</a></li>
                        <li id="navItem1"><a href="./work.html"> Mina meriter</a></li>
                    </ul>
                </nav>
            </header>
            <div class="MainPic">
                <div class="textContainer">
                    <h1 id="titleText">Joel Engström</h1>
                    <h2 id="descText">Programmerare / Webutvecklare / Spelutvecklare / Cad-ritare / Fotograf</h2>
                </div>
            </div>
        </div>
    </body>
</html>