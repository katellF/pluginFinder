<?php

class ControllerHomeSearch
{

   public function index(){

       $view = new View("frontend/homeSearch");
       $view->generate(array());

   }


}