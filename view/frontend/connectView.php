
<?php
session_start();
$this->title = htmlspecialchars('Se connecter');
?>

<div class="container connect">

    <h2 class="text-center">Se connecter</h2>


    <form action="index.php?action=Member/favoritesList" method="post" class="form-connect">
        <div class="form-group margin-bottom25">
            <label for="pseudo" class="margin-bottom15">pseudo</label><br/>
            <input type="text" class="form-control" id="pseudoConnect" placeholder="pseudo" name="pseudoConnect">
        </div>
        <div class="form-group margin-bottom25">
            <label for="password" class="margin-bottom15">Mot de passe</label>
            <input type="password" class="form-control" id="passwordConnect" placeholder="Password" name="passwordConnect" >
        </div>
        <div>
            <input type="submit" class="btn btn-primary btn-lg btn-block active button-form" value="se connecter"/>
        </div>
    </form>

</div>
