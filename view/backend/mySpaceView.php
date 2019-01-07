<?php
use Katell\Model\FavoritesManager;
use Katell\Helpers\View;
use Katell\Controller\Member;
?>
<div class="container text-center favorites">

    <p class="font_size_3">My Favorites</p>

    <?php
   // $getFavorites=$this->favoritesManager->getFavorites();
    while ($data = $favorites->fetch()) {
var_dump($data);
    ?>
        <?= htmlspecialchars($data['pluginName'])." - ".$data['pluginId']."- <a href=\"index.php?action=Member/deleteFavorite/".$data['pluginId']."\">Delete</a>"."</br>"; ?>


        <?php
    }

    $favorites->closeCursor();
    ?>
</div>