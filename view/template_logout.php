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

<body>

<?= $content ?>


<?php
require(dirname(__FILE__) . '/includes/scripts_footer.php');
?>

</body>

<?php
require(dirname(__FILE__) . '/includes/footer.php');
?>

</html>