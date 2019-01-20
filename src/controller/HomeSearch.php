<?php
namespace Katell\Controller;
use Katell\Helpers\View;
use Katell\Controller\Connect;
use Katell\Model\FavoritesManager;


class HomeSearch
{

    public function __construct()
    {
        $this->ctrlConnect = new Connect();
        $this->ctrlFavorites = new FavoritesManager();

    }
   public function index(){
        session_start();
       $view = new View("frontend/homeSearch");


       $userConnected = ($this->ctrlConnect->isUserConnected()) ? 'true' : 'false';

       if ($this->ctrlConnect->isUserConnected()) {
           $data = $this->ctrlFavorites->getFavoritesIds($_SESSION["id"]);
       }
       $listFavoritesIds = ($this->ctrlConnect->isUserConnected()) ? $data : [];


       $view->generate(array("isUserConnected" => $userConnected , "listFavoritesIds" => $listFavoritesIds));
//       $view->generate(array("isUserConnected" => "testme" ));
   }
}

