<?php


require_once __DIR__ . '/vendor/autoload.php';
use  Katell\Controller\Frontend\ControllerHomeSearch;
use  Katell\Controller\Frontend\ControllerConnect;
use  Katell\Controller\Frontend\ControllerContact;
use  Katell\Controller\Frontend\ControllerInfo;
use  Katell\Helpers\View;
// set a constant that holds the project's folder path, like "/var/www/".
// DIRECTORY_SEPARATOR adds a slash to the end of the path
define('ROOT', dirname(__DIR__) . DIRECTORY_SEPARATOR);
// set a constant that holds the project's "application" folder, like "/var/www/application".
define('APP', ROOT . 'pluginFinder' . DIRECTORY_SEPARATOR);


//require('Autoload.php');

//autoload::load();
$ControllerHomeSearch = new ControllerHomeSearch();
$ControllerConnect = new ControllerConnect();
$ControllerContact = new ControllerContact();
$ControllerInfo = new ControllerInfo();
//$HelperView = new View("frontend/homeSearch");

require('src/controller/Router.php');

$router = new Router();
//$routeur->routerRequest();