<?php


require_once __DIR__ . '/vendor/autoload.php';
use projectPlugin\controller\frontend\ControllerHomeSearch;
// set a constant that holds the project's folder path, like "/var/www/".
// DIRECTORY_SEPARATOR adds a slash to the end of the path
define('ROOT', dirname(__DIR__) . DIRECTORY_SEPARATOR);
// set a constant that holds the project's "application" folder, like "/var/www/application".
define('APP', ROOT . 'pluginFinder' . DIRECTORY_SEPARATOR);


//require('Autoload.php');

//autoload::load();
$ControllerHomeSearch = new ControllerHomeSearch();

require('src/controller/Router.php');

$routeur = new Router();
//$routeur->routerRequest();