<?php

namespace Katell\Controller;

use Katell\Model\FavoritesManager;
use Katell\Model\UserManager;
use Katell\Helpers\View;

class API
{
    private $ctrlConnect;
    private $favoritesManager;
    private $userManager;

    public function __construct()
    {
        $this->ctrlConnect = new Connect();
        $this->favoritesManager = new FavoritesManager();
        $this->userManager = new UserManager();

    }

    public function index()
    {
        $this->listFavorites();
    }

    public function listFavorites()
    {
        session_start();

        if ($this->ctrlConnect->isUserConnected()) {
            $getFavorites = $this->favoritesManager->getFavorites($_SESSION['id']);
            $view = new View("backend/API");
            $view->generate(array('data' => $getFavorites), 'template_API');
        } else {
            throw new \Exception("Sorry, You don't have access to this page.");
        }

    }


    public function deleteFavorite($pluginId)
    {
        session_start();

        if ($this->ctrlConnect->isUserConnected()) {
            $deleteFavorite = $this->favoritesManager->delete($_SESSION['id'], $pluginId);


            $deleteFavoriteAPI = array(
                "action" => "deleteFavorite",
                "result" => $deleteFavorite->rowCount(),
            );


            $view = new View("backend/API");
            $view->generate(array('data' => $deleteFavoriteAPI), 'template_API');
        } else {
            throw new \Exception("Sorry, You don't have access to this page.");
        }
    }

    public function addFavorite($pluginId, $pluginName)
    {
        session_start();

        if ($this->ctrlConnect->isUserConnected()) {


            $data = [
                "userId" => $_SESSION['id'],
                "pluginId" => $pluginId,
                "pluginName" => html_entity_decode($pluginName)

            ];

            $addFavorite = $this->favoritesManager->add($data);


            $addFavoriteAPI = array(
                "action" => "addFavorite",
                "result" => $addFavorite->rowCount(),
            );


            $view = new View("backend/API");
            $view->generate(array('data' => $addFavoriteAPI), 'template_API');
        }

    }

}