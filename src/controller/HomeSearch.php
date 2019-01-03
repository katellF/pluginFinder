<?php
namespace Katell\Controller;
use Katell\Helpers\View;

class HomeSearch
{

   public function index(){

       $view = new View("frontend/homeSearch");
       $view->generate(array());
   }
}

