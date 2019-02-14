<?php

//session_start();
$this->title = htmlspecialchars('Home');
?>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css">
<link rel="stylesheet" href="public/css/style.css">


<script type="text/javascript">
    let currentPage = "homeView"; // "A string here"
    let isUserConnected = <?=$isUserConnected ?>; // "A string here"
    let listFavoritesIds = <?php


    if( $listFavoritesIds ) {
            $listIds = $listFavoritesIds->fetchAll(PDO::FETCH_COLUMN,0);
            echo json_encode($listIds);
        } else {
            echo "[];";
        }
        ?> // "A string here"


</script>


<div id="app" class="homeSearch_page"></div>
<script src="public/js/pluginfinder.js"></script>



