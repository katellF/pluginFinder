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
        if ($this->ctrlConnect->isUserConnected()) {
        $view = new View("frontend/about");
        $view->generate(array(), "template_member");
        }

        $view = new View("frontend/about");
        $view->generate(array());

    }

}