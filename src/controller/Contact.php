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

            if (filter_var(htmlspecialchars($_POST['email']), FILTER_VALIDATE_EMAIL) === false) {

            throw new \Exception('The email was not written correctly');

        }

        if (empty ($_POST['content']) || empty ($_POST['lastname']) || empty ($_POST['firstname'])) {

            throw new \Exception('All fields must be completed');

        }


            $email_sent = $this->sendContactMessage($_POST);

            if ($email_sent){
                $view = new View("frontend/MessageSent");
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


    //http://rockstarninja.labak.xyz/gandisimple-hosting-envoie-de-mail-par-le-smtp-de-gandi

    //works only for local

            $headers = 'From: '.$data['email'] . "\r\n" .
                'Reply-To: '.$data['email'] . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            $result = mail("katell@katellfracassi.com","Message from " . $data['email'], $data['message'], $headers);

            return $result;

    }
}
