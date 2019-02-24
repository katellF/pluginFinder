<?php

namespace Katell\Controller;

use Katell\Model\UserManager;
use Katell\Helpers\View;

class Connect
{
    private $UserConnect;


    public function __construct()
    {
        $this->UserConnect = new UserManager();

    }

    public function index()
    {

        $view = new View("frontend/register");
        $view->generate(array());
    }

    public function registration()
    {
        if (isset ($_POST) && !empty($_POST)) {


            $post_pseudo = htmlspecialchars(trim($_POST['pseudo']));

            $user = $this->UserConnect->getUser($post_pseudo);

            if (empty (htmlspecialchars(trim($_POST['password']))) || empty (htmlspecialchars(trim($_POST['pseudo']))) || empty (htmlspecialchars(trim($_POST['lastname']))) || empty (htmlspecialchars(trim($_POST['firstname']))) || empty (htmlspecialchars(trim($_POST['pseudo'])))) {

                throw new \Exception('All fields must be completed');
            }

            if ($user->rowCount() !== 0) {

                throw new \Exception('this pseudo already exist ');

            }


            if (strlen(htmlspecialchars(trim($_POST['firstname']))) < 1) {


                throw new \Exception('First Name too short. At least 1 character is necessary.');

            }


            if (strlen(htmlspecialchars(trim($_POST['lastname']))) < 1) {


                throw new \Exception('Last Name too short. At least 1 character is necessary.');

            }



            if (strlen(htmlspecialchars(trim($_POST['pseudo']))) < 3) {


                throw new \Exception('Login too short. At least 3 characters are necessary.');

            }


            if (strlen(htmlspecialchars(trim($_POST['password']))) < 5) {


                throw new \Exception('Password too short. At least 5 characters are necessary.');

            }

            if (htmlspecialchars(trim($_POST['password'])) !== htmlspecialchars(trim($_POST['confirmPassword']))) {


                throw new \Exception('the passwords have to be identical');

            }

            if (strlen(htmlspecialchars(trim($_POST['email']))) < 6) {


                throw new \Exception('Email too short. At least 6 characters are necessary.');

            }


            if (filter_var(htmlspecialchars(trim($_POST['email'])), FILTER_VALIDATE_EMAIL) === false) {

                throw new \Exception('The email was not written correctly');

            }


            session_start();

            $this->UserConnect->registerUser($_POST);
            $connect = $this->UserConnect->userConnect(htmlspecialchars(trim($_POST['pseudo'])));
            $_SESSION['pseudo'] = $connect['pseudo'];
            $_SESSION['id'] = $connect['id'];


            header('Location: index.php?action=member');

        }

        $view = new View("frontend/register");
        $view->generate(array());
    }


    public function connection()
    {
        if (isset ($_POST) && !empty($_POST)) {

            if (empty (htmlspecialchars(trim($_POST['passwordConnect']))) || empty (htmlspecialchars(trim($_POST['pseudoConnect'])))) {

                throw new \Exception('All fields must be completed');
            }


            if (strlen(htmlspecialchars(trim($_POST['pseudoConnect']))) < 3 ) {

                throw new \Exception('Login too short. At least 3 characters are necessary.');
            }


            if (strlen(htmlspecialchars(trim($_POST['passwordConnect']))) < 5 ) {

                throw new \Exception('Password too short. At least 5 characters are necessary.');
            }




            $res = $this->UserConnect->userConnect(trim($_POST['pseudoConnect']));

            $isPasswordCorrect = password_verify(htmlspecialchars(trim($_POST['passwordConnect'])), $res['password']);
            if (!$res) {

                throw new \Exception('Wrong pseudo or password');

            } else {
                if ($isPasswordCorrect) {

                    session_start();
                    $_SESSION['id'] = $res['id'];
                    $_SESSION['pseudo'] =htmlspecialchars(trim($_POST['pseudoConnect']));

                    header('Location: index.php?action=member');

                } else {
                    throw new \Exception('Wrong pseudo or password');
                }
            }
        }

        $view = new View("frontend/connect");
        $view->generate(array());
    }

    public function logout()
    {
        session_start();

        $this->UserConnect->getLogout();

        if (empty($_SESSION)) {
            $view = new View("backend/logout");
            $view->generate(array(), 'template_logout');

        } else {
            header('Location: index.php?action=member');
        }
    }

    public function redirect()
    {

        $view = new View("frontend/redirect");
        $view->generate(array(), "template_redirect");


    }

    public function modifyPassword()
    {
        session_start();

        if ($this->isuserconnected()) {
            if (isset($_POST) && !empty($_POST)) {

                $pass_hache = password_hash((htmlspecialchars(trim($_POST['passwordConnect']))), PASSWORD_DEFAULT);
                $modifyPassword = $this->UserConnect->setPassword($_SESSION['pseudo'], $pass_hache);


                if (strlen(htmlspecialchars(trim($_POST['passwordConnect']))) < 6) {

                    throw new \Exception('Password too short. At least 6 characters are necessary');
                }

                if ((htmlspecialchars(trim($_POST['passwordConnect']))) !== (htmlspecialchars(trim($_POST['passwordConfirm'])))) {

                    throw new \Exception('the passwords have to be identical');
                }

                $view = new View("backend/modifyPass");
                $view->generate(array('password' => $modifyPassword), 'template_member');

            } else {

                $view = new View("backend/modifyPass");
                $view->generate(array(), 'template_member');

            }
        } else {

            throw new \Exception('Sorry, you do not have access to this page!');
        }
    }

    public function isUserConnected()
    {
        if (isset($_SESSION) && isset($_SESSION['pseudo'])) {

            return true;

        } else {
            return false;
        }
    }
}