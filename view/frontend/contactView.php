<div class="container">
    <h2 class="text-center form-contact">Contactez Nous</h2>

    <form action="index.php?action=contact" method="post">
        <div class="form-group">
            <label for="lastname">Nom</label><br/>
            <input type="text" class="form-control" id="lastname" name="lastname"/>
        </div>
        <div class="form-group">
            <label for="firstname">Prénom</label><br/>
            <input type="text" class="form-control" id="firstname" name="firstname"/>
        </div><div class="form-group">

            <label for="email">Email</label><br/>
            <input type="text" class="form-control" id="email" name="email"/>
        </div>
        <div class="form-group">
            <label for="content">Votre Demande</label><br/>
            <textarea class="form-control" id="content" name="content"></textarea>
        </div>
        <div class="row no-gutters justify-content-center">
            <input type="submit" class="btn btn-primary btn-lg btn-block active button-form" value="Envoyer"/>
        </div>
    </form>
</div>
