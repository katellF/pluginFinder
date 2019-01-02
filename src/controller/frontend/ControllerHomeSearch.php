<?php
namespace Katell\Controller\Frontend;
use Katell\Helpers\View;

class ControllerHomeSearch
{

   public function index(){

      /// echo'Coucou Home';

       $view = new View("frontend/homeSearch");
       $view->generate(array());

   }


}