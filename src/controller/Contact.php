<?php

namespace Katell\Controller;
use Katell\Helpers\View;

class Contact
{
    public function index()
    {

        $view = new View("frontend/contact");
        $view->generate(array(), "template_member");


    }
}
