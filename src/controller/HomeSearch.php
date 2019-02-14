<?php
namespace Katell\Controller;
use Katell\Helpers\View;
//use Katell\Controller\Connect;
use Katell\Model\FavoritesManager;


class HomeSearch
{

    public function __construct()
    {
        $this->ctrlConnect = new Connect();
        $this->favoritesManager = new FavoritesManager();
    }

    public function index()
    {
        session_start();
        $data = "";
        $view = new View("frontend/homeSearch");

        $userConnected = ($this->ctrlConnect->isUserConnected()) ? 'true' : 'false';


        if ($this->ctrlConnect->isUserConnected()) {

            $listFavoritesIds = $this->favoritesManager->getFavoritesIds($_SESSION["id"]);
            $view->generate(array("isUserConnected" => $userConnected, "listFavoritesIds" => $listFavoritesIds), "template_member");

        } else if (!$this->ctrlConnect->isUserConnected()) {

            $listFavoritesIds = ($this->ctrlConnect->isUserConnected()) ? $data : [];

            $view->generate(array("isUserConnected" => $userConnected, "listFavoritesIds" => $listFavoritesIds));

        }
    }
}







