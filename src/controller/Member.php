<?php
namespace Katell\Controller;
use Katell\Model\FavoritesManager;
use Katell\Model\UserManager;
use Katell\Helpers\View;

class Member
{
    private $ctrlConnect;
    private $favoritesManager;
    private $userManager;
    private $isUserConnected;

    public function __construct()
    {

        $this->ctrlConnect = new Connect();
        $this->favoritesManager = new FavoritesManager();
        $this->userManager = new UserManager();
        $this->isUserConnected = ($this->ctrlConnect->isUserConnected()) ? 'true' : 'false';

    }

    public function index()
    {

        $this->favoritesList();
    }

    public function favoritesList()
    {
        session_start();


        if ($this->ctrlConnect->isUserConnected()) {

            $getFavorites = $this->favoritesManager->getFavorites($_SESSION['id']);
            $view = new View("backend/mySpace");
            $view->generate(array('favorites' => $getFavorites , "isUserConnected" => $this->isUserConnected), 'template_member');

        } else {
            throw new \Exception('Vous n avez pas acces à cette page!');
        }

    }

    public function deleteFavorite($pluginId)
    {

        session_start();

        if ($this->ctrlConnect->isUserConnected()) {

            $this->favoritesManager->delete($_SESSION['id'], $pluginId);
            $view = new View("backend/favoriteDeleted");
            $view->generate(array(), 'template_mySpace');
        }
    }

}