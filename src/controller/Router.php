<?php

use Katell\Controller\HomeSearch;
use Katell\Controller\Connect;
use Katell\Controller\Contact;
use Katell\Controller\Info;
use Katell\Controller\Member;
use Katell\Helpers\View;


class Router
{
    private $ctrlHomeSearch;
    private $ctrlConnect;
    private $ctrlContact;
    private $ctrlInfo;
    private $ctrlMember;
    private $helperView;

    /** @var null The controller */
    private $url_controller = null;

    /** @var null The method (of the above controller), often also named "action" */
    private $url_action = null;

    /** @var array URL parameters */
    private $url_params = array();


    public function __construct()
    {
        $this->ctrlHomeSearch = new HomeSearch();
        $this->ctrlConnect = new Connect();
        $this->ctrlContact = new Contact();
        $this->ctrlInfo = new Info();
        $this->ctrlMember = new Member();
        $this->helperView = new View("frontend/homeSearch");
        $this->splitUrl();

    }


    public function routerRequest()
    {
        try {
            if (!$this->url_controller) {

                $page = $this->ctrlHomeSearch;

                $page->index();

            } elseif (class_exists('Katell\Controller\\' . $this->url_controller)) {

                $url_controller = 'Katell\Controller\\' . $this->url_controller;
                $this->url_controller = new $url_controller();

                // check for method: does such a method exist in the controller ?


                if (method_exists($url_controller, $this->url_action)) {

                    if (!empty($this->url_params)) {
                        // Call the method and pass arguments to it
                        call_user_func_array(array($this->url_controller, $this->url_action), $this->url_params);
                    } else {
                        // If no parameters are given, just call the method without parameters, like $this->home->method();
                        $this->url_controller->{$this->url_action}();
                    }

                } else {
                    if (strlen($this->url_action) == 0) {
                        // no action defined: call the default index() method of a selected controller
                        $this->url_controller->index();
                    } else {
                        header('location: ' . URL . 'problem');
                    }
                }
            } else {
                header('location: ' . URL . 'problem');
            }
        } catch (Exception $e) {

            $this->error($e->getMessage());

        }
    }


    private function error($msgError)
    {
        $view = new View("frontend/error");
        $view->generate(array('msgError' => $msgError));
    }

    private function splitUrl()
    {

        if (isset($_GET['action'])) {

            // split URL
            $url = trim($_GET['action'], '/');
            //$url = filter_var($url, FILTER_SANITIZE_URL);
            $url = filter_var($url);

            $url = explode('/', $url);


            // Put URL parts into according properties
            $this->url_controller = isset($url[0]) ? $url[0] : null;
            $this->url_action = isset($url[1]) ? $url[1] : null;


            // Remove controller and action from the split URL
            unset($url[0], $url[1]);

            // Rebase array keys and store the URL params
            $this->url_params = array_values($url);

            // for debugging. uncomment this if you have problems with the URL
            //echo 'Controller: ' . $this->url_controller . '<br>';
            // echo 'Action: ' . $this->url_action . '<br>';
            // echo 'Parameters: ' . print_r($this->url_params, true) . '<br>';
        }
    }

}