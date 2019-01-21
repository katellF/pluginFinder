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
        $this->favoritesManager = new FavoritesManager();

    }
   public function index(){
        session_start();
        $data="";
       $view = new View("frontend/homeSearch");
       //var_dump($data);

       $userConnected = ($this->ctrlConnect->isUserConnected()) ? 'true' : 'false';
       //var_dump($userConnected);

       if ($this->ctrlConnect->isUserConnected()) {
          // $data = $this->favoritesManager->getFavoritesIds($_SESSION["id"]);
           $listFavoritesIds = ($this->ctrlConnect->isUserConnected()) ? $data : $this->favoritesManager->getFavoritesIds($_SESSION["id"]);

           $view->generate(array("isUserConnected" => $userConnected , "listFavoritesIds" => $listFavoritesIds), "template_member");

//           $view = new View("frontend/homeSearch");
           //$view->generate( 'template_mySpace');

           // var_dump($data);
//           $view = new View("frontend/homeSearch");
//           $view->generate(array(), 'template_mySpace');
       } else if (!$this->ctrlConnect->isUserConnected()){

           $listFavoritesIds = ($this->ctrlConnect->isUserConnected()) ? $data : [];

           $view->generate(array("isUserConnected" => $userConnected , "listFavoritesIds" => $listFavoritesIds));

       }

      // $view = new View("frontend/homeSearch");
      // $listFavoritesIds = ($this->ctrlConnect->isUserConnected()) ? $data : [];
      // $view->generate(array("isUserConnected" => $userConnected , "listFavoritesIds" => $listFavoritesIds));
       var_dump($userConnected);
//       $view->generate(array("isUserConnected" => "testme" ));
   }
}

