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


            $post_pseudo = htmlspecialchars($_POST['pseudo']);

            $user = $this->UserConnect->getUser($post_pseudo);

            if ($user->rowCount() === 0) {

                echo 'on peut ajouter pseudo';

            } else {

                throw new \Exception('this pseudo already exist ');

            }

            if (strlen(htmlspecialchars($_POST['password'])) < 6) {


                throw new \Exception('Password too short. At least 6 characters are necessary');

            }

            if (htmlspecialchars($_POST['password']) !== htmlspecialchars($_POST['confirmPassword'])) {


                throw new \Exception('the passwords have to be identical');

            }
            if (filter_var(htmlspecialchars($_POST['email']), FILTER_VALIDATE_EMAIL) === false) {

                echo('ecriture email fausse');
                throw new \Exception('The email was not written correctly');

            }


                session_start();

                $this->UserConnect->registerUser($_POST);
                $connect = $this->UserConnect->userConnect($_POST['pseudo']);
                $_SESSION['pseudo'] = $connect['pseudo'];


                header('Location: index.php?action=member');

        }


        $view = new View("frontend/register");
        $view->generate(array());
    }


    public function connection()
    {
        if (isset ($_POST) && !empty($_POST)) {

            if (empty (htmlspecialchars($_POST['passwordConnect'])) || empty (htmlspecialchars($_POST['pseudoConnect']))) {

                throw new \Exception('All fields must be completed');
            }

            $res = $this->UserConnect->userConnect($_POST['pseudoConnect']);

            $isPasswordCorrect = password_verify(htmlspecialchars($_POST['passwordConnect']), $res['password']);
            if (!$res) {

                throw new \Exception('Wrong pseudo or password');

            } else {
                if ($isPasswordCorrect) {

                    session_start();
                    $_SESSION['id'] = $res['id'];
                    $_SESSION['pseudo'] = $_POST['pseudoConnect'];

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
        $view->generate(array(),"template_redirect");


    }

    public function isUserConnected()
    {
        if (isset($_SESSION) && isset($_SESSION['pseudo'])) {

            return true;

        } else {
            return false;
        }
    }

    public function modifyPassword()
    {
        session_start();

        if ($this->isuserconnected()) {
                if (isset($_POST) && !empty($_POST)) {

                $pass_hache = password_hash($_POST['passwordConnect'], PASSWORD_DEFAULT);
                $modifyPassword = $this->UserConnect->setPassword($_SESSION['pseudo'], $pass_hache);


                if (strlen(htmlspecialchars($_POST['passwordConnect'])) < 6) {

                    throw new \Exception('Password too short. At least 6 characters are necessary');
                }

                if ($_POST['passwordConnect'] !== $_POST['passwordConfirm']) {

                    throw new \Exception('the two passwords have to be identical');
                }

                $view = new View("backend/modifyPass");
                $view->generate(array('password' => $modifyPassword),'template_member');

            } else {

                $view = new View("backend/modifyPass");
                $view->generate(array(),'template_member');

            }
        }else {

           throw new \Exception('Sorry, you do not have access to this page!');
       }
    }


}