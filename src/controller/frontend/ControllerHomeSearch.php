<?php
namespace projectPlugin\controller\frontend;

class ControllerHomeSearch
{

   public function index(){

       $view = new View("frontend/homeSearch");
       $view->generate(array());

   }


}