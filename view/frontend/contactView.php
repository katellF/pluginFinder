<?php

//session_start();
$this->title = htmlspecialchars('Contact');
?>

<div class="container">
    <h1 class="text-center title">Contact Us</h1>

    <form action="index.php?action=contact" method="post">
        <div class="form-group">
            <label for="lastname">Name</label><br/>
            <input type="text" class="form-control" id="lastname" name="lastname"/>
        </div>
        <div class="form-group">
            <label for="firstname">Firstname</label><br/>
            <input type="text" class="form-control" id="firstname" name="firstname"/>
        </div><div class="form-group">

            <label for="email">Email</label><br/>
            <input type="email" class="form-control" id="email" name="email"/>
        </div>
        <div class="form-group">
            <label for="message">Your Message</label><br/>
            <textarea class="form-control" id="message" name="message"></textarea>
        </div>
        <div class="row no-gutters justify-content-center send">
            <input type="submit" class="btn btn-primary btn-lg btn-block active buttonForm" value="Send"/>
        </div>
    </form>
</div>
