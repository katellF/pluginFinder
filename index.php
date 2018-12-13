<?php
require('Autoload.php');

autoload::load();

require('controller/Router.php');

$routeur = new Router();
$routeur->routerRequest();