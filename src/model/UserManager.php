<?php
namespace Katell\Model;
//use Katell\Model\Manager;

class UserManager extends Manager
{
    public function getUser($pseudo)
    {

        $db = $this->dbConnect();

        $req = $db->prepare('SELECT id, pseudo, password FROM users WHERE pseudo =:pseudo');
        $req->execute(array(
            'pseudo' => htmlspecialchars($pseudo)));

        return $req;
    }

    public function registerUser($data)
    {

        $db = $this->dbConnect();

        $pass_hache = password_hash(htmlspecialchars($data['password']), PASSWORD_DEFAULT);
        $req = $db->prepare('INSERT INTO users(lastname, firstname, pseudo, email, password, registration_date) VALUES(:lastname,:firstname,:pseudo,:email,:password, CURDATE())');


        $res = $req->execute(array(
            'lastname'  => htmlspecialchars($data['lastname']),
            'firstname' => htmlspecialchars($data['firstname']),
            'pseudo'    => htmlspecialchars($data['pseudo']),
            'email'     => htmlspecialchars($data['email']),
            'password'  => htmlspecialchars($pass_hache),));

        return $res;
    }

    public function userConnect($pseudo)
    {

        $db = $this->dbConnect();

        $req = $db->prepare("SELECT id, pseudo, password FROM users WHERE pseudo =:pseudo");
        $res = $req->execute(array(
            'pseudo' => $pseudo,
        ));

        $resultat = $req->fetch();

        return $resultat;
    }

    public function getLogout()
    {

        $_SESSION = array();
        session_destroy();
    }

    public function setPassword($pseudo, $password)
    {
        $db = $this->dbConnect();

        $updatePassword = $db->prepare('UPDATE users SET  password=:password WHERE  pseudo=:pseudo ');
        $modifyPassword = $updatePassword->execute(array('pseudo' => $pseudo, 'password' => $password));

        return $modifyPassword;
    }


}