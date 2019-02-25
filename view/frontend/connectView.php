
<?php
session_start();
$this->title = htmlspecialchars('Login');
?>

<div class="container connect">

    <h1 class="text-center title">Login</h1>


    <form action="index.php?action=connect/connection" method="post" class="form-connect" id="connectform">
        <div class="form-group margin-bottom25">
            <label for="pseudo" class="margin-bottom15">pseudo</label><br/>
            <input type="text" class="form-control" id="pseudoConnect" placeholder="pseudo" name="pseudoConnect" required minlength="3" maxlength="20">
            <div id="pseudoConnectCheck"></div>
        </div>
        <div class="form-group margin-bottom25">
            <label for="password" class="margin-bottom15">Password</label>
            <input type="password" class="form-control" id="passwordConnect" placeholder="Password" name="passwordConnect" required minlength="5" maxlength="20">
            <div id="passwordConnectCheck"></div>
        </div>
        <div class="send">
            <input type="submit" class="btn btn-primary btn-lg btn-block active buttonForm" value="login" id="sendconnect"/>
        </div>
    </form>



</div>
