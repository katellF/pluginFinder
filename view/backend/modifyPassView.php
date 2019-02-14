<?php

//session_start();
$this->title = htmlspecialchars('Change password');
?>

<p class="margin-top50 margin-bottom25 margin-left15"><a class="btn btn-primary bg-6BC3D1"
                                                         href="index.php?action=homeSearch">Back to Home</a></p>


    <?php
if (isset ($_POST) && !empty($_POST)  && $password ) {


?>
<div class="container margin-top50 text-center border_notif">
    <h1 class="margin-bottom25">Change your password</h1>
    <p>Your password has been changed.</p>
    </div>
<?php
} else {
?>

<div class="container connect">

    <h2 class="text-center">Modify your password</h2>


    <form action="index.php?action=connect/modifypassword" method="post" class="form-connect">
        <div class="form-group margin-bottom15">
            <label for="pseudo">pseudo</label><br/>
            <strong class="font-weight-bold"><?=$_SESSION['pseudo']?></strong>

        </div>
        <div class="form-group margin-bottom25">
            <label for="password" class="margin-bottom15">Enter your new password</label>
            <input type="password" class="form-control" id="passwordConnect" placeholder="Password" name="passwordConnect">
        </div>
        <div class="form-group margin-bottom25">
            <label for="passwordConfirm" class="margin-bottom15">Confirm your new password</label>
            <input type="password" class="form-control" id="passwordConfirm" placeholder="Password" name="passwordConfirm">
        </div>

        <div>
            <input type="submit" class="btn btn-primary btn-lg btn-block active button-form button-change-pass" value="Modifier"/>
        </div>
    </form>

</div>

    <?php
}
?>
