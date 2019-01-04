<?php
namespace Katell\Controller;
use Katell\Helpers\View;

class Member
{
    public function index()
    {

        $view = new View("backend/mySpace");
        $view->generate(array());


    }
}