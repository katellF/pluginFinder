<?php
namespace Katell\Controller;
use Katell\Helpers\View;
use Katell\Controller\Connect;


class HomeSearch
{

    public function __construct()
    {
        $this->ctrlConnect = new Connect();

    }
   public function index(){
        session_start();
       $view = new View("frontend/homeSearch");

       $userConnected = ($this->ctrlConnect->isUserConnected()) ? 'true' : 'false';
//       die();


       $view->generate(array("isUserConnected" => $userConnected ));
//       $view->generate(array("isUserConnected" => "testme" ));
   }
}

