<?php
session_start();
$this->title = htmlspecialchars('Inscription');
?>

<div class="container connect">

    <h2 class="text-center">Register</h2>


    <form action="index.php?action=connect/registration" method="post" class="form-connect">
        <div class="form-group margin-bottom25">
            <label for="lastname" class="margin-bottom15">Name</label><br/>
            <input type="text" class="form-control" id="lastname" placeholder="Nom" name="lastname">
        </div>
        <div class="form-group margin-bottom25">
            <label for="firstname" class="margin-bottom15">Firstname</label><br/>
            <input type="text" class="form-control" id="firstname" placeholder="Prenom" name="firstname">
        </div>
        <div class="form-group margin-bottom25">
            <label for="email" class="margin-bottom15">Email</label><br/>
            <input type="text" class="form-control" id="email" placeholder="Email" name="email">
        </div>

        <div class="form-group margin-bottom25">
            <label for="pseudo" class="margin-bottom15">Choose a Pseudo</label><br/>
            <input type="text" class="form-control" id="pseudo" placeholder="Pseudo" name="pseudo">
        </div>
        <div class="form-group margin-bottom25">
            <label for="password" class="margin-bottom15">Choose a Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" name="password" >
        </div>
        <div class="form-group margin-bottom25">
            <label for="confirmPassword" class="margin-bottom15">Confirm the Password</label>
            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password" name="confirmPassword" >
        </div>
        <div>
            <input type="submit" class="btn btn-primary btn-lg btn-block active button-form" value="Register"/>
        </div>
    </form>

</div>
