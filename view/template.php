
<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" type="image/png" href="../pluginfinder/public/img/favicon.png">
    <?php
    require(dirname(__FILE__) . '/includes/scripts_head.php');
    ?>


    <title><?= $title ?></title>
</head>


<?php $this->title = 'home';

?>
</head>

<body>

<header>
    <nav class="navbar header__nav navbar-expand-lg navbar-dark">
        <div class="container">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div>
                <img src="../pluginfinder/public/img/logo_1.png" alt="website logo" height="90" width="90"/>
            </div>
            <div class=" collapse navbar-collapse row menu menu_burger" id="navbarTogglerDemo03">
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item active border_nav bar">
                        <a class="nav-link nav_linkR" href="index.php">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active border_nav bar">
                        <a class="nav-link nav_linkR" href="index.php?action=info">About</a>
                    <li class="nav-item active bar">
                        <a class="nav-link nav_linkR" href="index.php?action=contact">Contact</a>
                    </li>
                    <li class="nav-item active bar">
                        <a class="nav-link nav_linkR" href="index.php?action=connect">Registration</a>
                    </li>
                    <li class="nav-item active bar">
                        <a class="nav-link nav_linkR" href="index.php?action=connect/connection">Login</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</header>

<?= $content ?>

<?php
require(dirname(__FILE__) . '/includes/scripts_footer.php');
?>

</body>

<?php
require(dirname(__FILE__) . '/includes/footer.php');
?>

</html>