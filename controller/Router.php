<?php

class Router
{
    private $ctrlHomeSearch;

    public function __construct()
    {
        $this->ctrlHomeSearch = new ControllerHomeSearch();

    }

    public function routerRequest()
    {
        if (isset($_GET['action'])) {
            if ($_GET['action'] == 'home') {

                $this->ctrlHomeSearch->home();
            }
        }

    }

}