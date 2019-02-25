<?php

$this->title = htmlspecialchars('Register');
?>

<div class="container connect">

    <h1 class="text-center title">Register</h1>


    <form action="index.php?action=connect/registration" method="post" class="form-connect">
        <div class="form-group margin-bottom25">
            <label for="lastname" class="margin-bottom15">Last Name</label><br/>
            <input type="text" class="form-control" id="lastname" placeholder="Last Name" name="lastname" required minlength="1" maxlength="50">
            <div id="lastnameCheck"></div>
        </div>
        <div class="form-group margin-bottom25">
            <label for="firstname" class="margin-bottom15">First Name</label><br/>
            <input type="text" class="form-control" id="firstname" placeholder="Firstname" name="firstname" required minlength="1" maxlength="50">
            <div id="firstnameCheck"></div>
        </div>
        <div class="form-group margin-bottom25">
            <label for="email" class="margin-bottom15">Email</label><br/>
            <input type="text" class="form-control" id="email" placeholder="Email" name="email" required minlength="6" maxlength="50">
            <div id="result"></div>
        </div>

        <div class="form-group margin-bottom25">
            <label for="pseudo" class="margin-bottom15">Choose a Pseudo</label><br/>
            <input type="text" class="form-control" id="pseudo" placeholder="Pseudo" name="pseudo" required minlength="3" maxlength="20">
            <div id="pseudoCheck"></div>
        </div>
        <div class="form-group margin-bottom25">
            <label for="password" class="margin-bottom15">Choose a Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" name="password" required minlength="5" maxlength="20">
            <div id="passwordCheck"></div>
        </div>
        <div class="form-group margin-bottom25">
            <label for="confirmPassword" class="margin-bottom15">Confirm the Password</label>
            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your Password" name="confirmPassword" required minlength="5" maxlength="20">
            <div id="confirmPasswordCheck"></div>
        </div>
        <div class="send">
            <input type="submit" class="btn btn-primary btn-lg btn-block active buttonForm" value="Register" id="sendregister"/>
        </div>
    </form>

</div>
