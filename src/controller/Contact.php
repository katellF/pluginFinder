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

            $email_sent = $this->sendContactMessage($_POST);
            if ($email_sent){
                $view = new View("frontend/MessageSent");
            } else {
                throw new \Exception('Message non envoyé') ;
            }
        }


        if ($this->ctrlConnect->isUserConnected()) {

            $view->generate(array(), "template_member");
        }else{

           // $view = new View("frontend/contact");
            $view->generate(array());
        }



    }

    public function sendContactMessage ($data){


//        http://rockstarninja.labak.xyz/gandisimple-hosting-envoie-de-mail-par-le-smtp-de-gandi


            $headers = 'From: '.$data['email'] . "\r\n" .
                'Reply-To: '.$data['email'] . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            $result = mail("katell@katellfracassi.com","Message from " . $data['email'], $data['message'], $headers);

            return $result;

    }


}
