<?php

$this->title = htmlspecialchars('Register');
?>

<div class="container connect">

    <h1 class="text-center title">Register</h1>


    <form action="index.php?action=connect/registration" method="post" class="form-connect">
        <div class="form-group margin-bottom25">
            <label for="lastname" class="margin-bottom15">Name</label><br/>
            <input type="text" class="form-control" id="lastname" placeholder="Name" name="lastname">
        </div>
        <div class="form-group margin-bottom25">
            <label for="firstname" class="margin-bottom15">Firstname</label><br/>
            <input type="text" class="form-control" id="firstname" placeholder="Firstname" name="firstname">
        </div>
        <div class="form-group margin-bottom25">
            <label for="email" class="margin-bottom15">Email</label><br/>
            <input type="email" class="form-control" id="email" placeholder="Email" name="email">
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
            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your Password" name="confirmPassword" >
        </div>
        <div class="send">
            <input type="submit" class="btn btn-primary btn-lg btn-block active buttonForm" value="Register"/>
        </div>
    </form>

</div>
