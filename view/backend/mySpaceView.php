

<script type="text/javascript">
    var currentPage = "mySpaceView"; // "A string here"
    var isUserConnected = <?=$isUserConnected ?>; // "A string here"

</script>


<div id="app"></div>

<script src="public/js/pluginfinder.js"></script>



<div class="container text-center favorites">

    <h1 class="font_size_3 marginTop50 marginBottom50">My Favorites</h1>

    <?php
   // $getFavorites=$this->favoritesManager->getFavorites();
    while ($data = $favorites->fetch()) {
//var_dump($data);
    ?>
        <div class=" margin-bottom25">
        <?= htmlspecialchars($data['pluginName'])." - ".$data['pluginId']."- <a href=\"index.php?action=Member/deleteFavorite/".$data['pluginId']."\" class=\"btn btn-info btn-m active marginLeft15 marginBottom15\">Delete</a>"."</br>"; ?>
        </div>
        <?php
    }

    $favorites->closeCursor();
    ?>
</div>