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
            throw new Exception('Vous n avez pas acces à cette page!');
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

//    public function modifyPassword()
//    {
//        session_start();
//
//        if ($this->isuserconnected()) {
//
//            if (isset($_POST) && !empty($_POST)) {
//
//                $pass_hache = password_hash($_POST['passwordConnect'], PASSWORD_DEFAULT);
//                $modifyPassword = $this->userManager->setPassword($_SESSION['pseudo'], $pass_hache);
//
//
//                if (strlen(htmlspecialchars($_POST['passwordConnect'])) < 6) {
//
//                    throw new Exception('Mot de passe trop court,  il faut au moins 6 caractères...');
//                }
//
//                if ($_POST['passwordConnect'] !== $_POST['passwordConfirm']) {
//
//                    throw new Exception('Les 2 mots de passe doivent etre identiques');
//                }
//
//                $view = new View("backend/modifyPass");
//                $view->generate(array('password' => $modifyPassword), 'template_backend');
//
//            } else {
//
//                $view = new View("backend/modifyPass");
//                $view->generate(array(), 'template_backend');
//
//            }
//
//        } else {
//
//            throw new Exception('Vous n avez pas acces à cette page!');
//        }
//    }
}