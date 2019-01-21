<?php

namespace Katell\Controller;
use Katell\Helpers\View;

class Info
{
    public function index()
    {

        $view = new View("frontend/about");
        $view->generate(array(), "template_member");

    }

}