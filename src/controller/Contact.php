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
        if ($this->ctrlConnect->isUserConnected()) {
            $view = new View("frontend/contact");
            $view->generate(array(), "template_member");
        }

        $view = new View("frontend/contact");
        $view->generate(array());

    }

}
