<?php

class ControllerHomeSearch
{

   public function home(){

       $view = new View("frontend/homeSearch");
       $view->generate(array());
      
   }
}