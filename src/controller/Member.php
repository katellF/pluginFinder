<?php
namespace Katell\Controller;
use Katell\Model\FavoritesManager;
use Katell\Helpers\View;

class Member
{
    private $ctrlConnect;
    private $favoritesManager;
    private $isUserConnected;

    public function __construct()
    {

        $this->ctrlConnect = new Connect();
        $this->favoritesManager = new favoritesManager();
        $this->isUserConnected = ($this->ctrlConnect->isUserConnected()) ? 'true' : 'false';

    }

    public function index()
    {

        $this->favoritesList();
//            $view = new View("backend/mySpace");
//            $view->generate(array(),"template_mySpace");

    }

    public function favoritesList()
    {
        session_start();


        if ($this->ctrlConnect->isUserConnected()) {

            $getFavorites = $this->favoritesManager->getFavorites($_SESSION['id']);




            $view = new View("backend/mySpace");
            $view->generate(array('favorites' => $getFavorites , "isUserConnected" => $this->isUserConnected), 'template_mySpace');
//            if (isset($_POST) && !empty($_POST) && isset($_GET["postid"])) {
//                $this->statusPost();
//            }
//
//            if (isset($_GET['status']) && $_GET['status'] === 'published') {
//
//                $posts = $this->postManager->getPostsByStatus('published');
//
//            } elseif (isset($_GET['status']) && $_GET['status'] === 'draft') {
//
//                $posts = $this->postManager->getPostsByStatus('draft');
//
//            } elseif (isset($_GET['status']) && $_GET['status'] === 'trash') {
//
//                $posts = $this->postManager->getPostsByStatus('trash');
//
//            } elseif (isset($_GET['status']) && $_GET['status'] === 'all') {
//
//                $posts = $this->postManager->getPosts();
//            } else {
//
//                $posts = $this->postManager->getPosts();
//            }


//            $view = new View("backend/admin");
//            $view->generate(array('posts' => $posts), 'template_backend');

        } else {
            throw new Exception('Vous n avez pas acces à cette page!');
        }

    }

    public function deleteFavorite($pluginId)
    {
        //var_dump($pluginId);

        session_start();
       // var_dump($_SESSION['pseudo']);
       // var_dump($_SESSION);
        if ($this->ctrlConnect->isUserConnected()) {

            $this->favoritesManager->delete($_SESSION['id'], $pluginId);
            $view = new View("backend/favoriteDeleted");
            $view->generate(array(), 'template_mySpace');
        }
    }
}