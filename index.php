<?php


require_once __DIR__ . '/vendor/autoload.php';
use  Katell\Controller\Frontend\HomeSearch;
use  Katell\Controller\Frontend\Connect;
use  Katell\Controller\Frontend\Contact;
use  Katell\Controller\Frontend\ControllerInfo;

// set a constant that holds the project's folder path, like "/var/www/".
// DIRECTORY_SEPARATOR adds a slash to the end of the path
define('ROOT', dirname(__DIR__) . DIRECTORY_SEPARATOR);
// set a constant that holds the project's "application" folder, like "/var/www/application".
define('APP', ROOT . 'pluginFinder' . DIRECTORY_SEPARATOR);


//require('Autoload.php');

//autoload::load();
$ControllerHomeSearch = new HomeSearch();
$ControllerConnect = new Connect();
$ControllerContact = new Contact();
$ControllerInfo = new ControllerInfo();


require('src/controller/Router.php');

$router = new Router();
//$routeur->routerRequest();