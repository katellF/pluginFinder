
<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php
    require(dirname(__FILE__) . '/includes/scripts_head.php');
    ?>


    <title><?= $title ?></title>
</head>


<?php $this->title = 'home';

?>
</head>

<body>

<header class="container">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">

            <div class=" collapse navbar-collapse row justify-content-end menu_burger" id="navbarTogglerDemo03">
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item active border_nav color_link">
                        <a class="nav-link color_link" href="index.php">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active border_nav color_link">
                        <a class="nav-link color_link" href="index.php?action=info">About</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link color_link" href="index.php?action=contact">Contact</a>

                    <li class="nav-item active">
                        <a class="nav-link color_link" href="index.php?action=connect/logout">logout</a>
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