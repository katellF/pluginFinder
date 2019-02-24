<?php

namespace Katell\Controller;
use Katell\Helpers\View;

class Contact
{

    private $ctrlConnect;

    public function __construct()
    {

        $this->ctrlConnect = new Connect();

    }

    public function index()
    {
        session_start();
        $view = new View("frontend/contact");

        if (isset($_POST) && !empty($_POST)) {

            if (empty (htmlspecialchars(trim($_POST['message']))) || empty (htmlspecialchars(trim($_POST['lastname']))) || empty (htmlspecialchars(trim($_POST['firstname'])))) {

            throw new \Exception('All fields must be completed');

        }

            if (filter_var(htmlspecialchars(trim($_POST['email'])), FILTER_VALIDATE_EMAIL) === false) {

                throw new \Exception('The email was not written correctly');

            }

            $email_sent = $this->sendContactMessage($_POST);

            if ($email_sent){
                $view = new View("frontend/messageSent");
            } else {
                throw new \Exception('Message not sent') ;
            }
        }


        if ($this->ctrlConnect->isUserConnected()) {

            $view->generate(array(), "template_member");

        }else{

            $view->generate(array());
        }
    }

    public function sendContactMessage ($data){

            $headers = 'From: '.htmlspecialchars(trim($data['email']) ). "\r\n" .
                'Reply-To: '. htmlspecialchars (trim($data['email']) ) . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            $result = mail("katell@katellfracassi.com","Message from " . htmlspecialchars(trim($data['email'])), htmlspecialchars(trim($data['message'])), $headers);

            return $result;

    }
}
