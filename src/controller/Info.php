<?php

namespace Katell\Controller;
use Katell\Helpers\View;

class Info
{
    private $ctrlConnect;


    public function __construct()
    {
        $this->ctrlConnect = new Connect();
    }

    public function index()
    {
        session_start();
        $view = new View("frontend/about");

        if ($this->ctrlConnect->isUserConnected()) {

        $view->generate(array(), "template_member");

        }else{
            $view->generate(array());
        }
    }

}