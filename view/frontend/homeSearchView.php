<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css">
<link rel="stylesheet" href="public/css/style.css">


<script type="text/javascript">
    var currentPage = "homeView"; // "A string here"
    var isUserConnected = <?=$isUserConnected ?>; // "A string here"
    var listFavoritesIds = <?php
            //We retrieve the list of pluginIds already present in the favorites list of the user

        if( $listFavoritesIds ) {
            $listIds = $listFavoritesIds->fetchAll(PDO::FETCH_COLUMN,0);
            echo json_encode($listIds);
        } else {
            echo "[];";
        }
        ?> // "A string here"


</script>

<div id="app"></div>
<script src="public/js/pluginfinder.js"></script>



