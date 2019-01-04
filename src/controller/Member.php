<?php
namespace Katell\Controller;
use Katell\Helpers\View;

class Member
{
    private $ctrlConnect;

    public function __construct()
    {

        $this->ctrlConnect = new Connect();

    }

    public function index()
    {
        session_start();

        //var_dump($this->ctrlConnect->isUserConnected());

        if($this->ctrlConnect->isUserConnected())
        {

            $view = new View("backend/mySpace");
            $view->generate(array(),"template_mySpace");

        }
    }
}