<?php
namespace Katell\Controller;
use Katell\Model\FavoritesManager;
use Katell\Helpers\View;

class Member
{
    private $ctrlConnect;
    private $favoritesManager;

    public function __construct()
    {

        $this->ctrlConnect = new Connect();
        $this->favoritesManager = new favoritesManager();

    }

    public function index()
    {
        session_start();

        if($this->ctrlConnect->isUserConnected())
        {

            $view = new View("backend/mySpace");
            $view->generate(array(),"template_mySpace");

        }
    }

    public function favoritesList()
    {
        //var_dump("toto");
        session_start();
       // var_dump("toto");


        if ($this->ctrlConnect->isUserConnected()) {

            //var_dump("toto");
            $getFavorites=$this->favoritesManager->getFavorites($_SESSION['id']);
            var_dump("toto");

            $view = new View("backend/mySpace");
            $view->generate(array('favorites' => $getFavorites), 'template_mySpace');

        } else {
            throw new Exception('Vous n avez pas acces à cette page!');
        }

    }

    public function deleteFavorite($pluginId)
    {
        var_dump($pluginId);

        session_start();
        var_dump($_SESSION['pseudo']);
        var_dump($_SESSION);
        if ($this->ctrlConnect->isUserConnected()) {


            $this->favoritesManager->delete($_SESSION['id'], $pluginId);
            $view = new View("backend/favoriteDeleted");
            $view->generate(array(), 'template_mySpace');
        }
    }
}