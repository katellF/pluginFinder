<?php
namespace Katell\Controller\Frontend;
use Katell\Helpers\View;

class HomeSearch
{

   public function index(){

       $view = new View("frontend/homeSearch");
       $view->generate(array());
   }
}

