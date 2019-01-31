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

        if ($this->ctrlConnect->isUserConnected()) {

            $view->generate(array(), "template_member");
        }else{

           // $view = new View("frontend/contact");
            $view->generate(array());
        }



    }

}
