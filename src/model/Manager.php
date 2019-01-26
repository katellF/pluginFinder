<?php
namespace Katell\Model;

abstract class Manager
{
    private $dbname;
    private $dbhost;
    private $dbuser;
    private $dbpassword;

    public function __construct()
    {
        $this->dbname = 'plugins-project5';
        $this->dbhost = 'localhost';
        $this->dbuser = 'root';

        if( $_SERVER['HTTP_HOST'] === 'www.katellfracassi.com') {
            $this->dbpassword = '';
        } else {
            $this->dbpassword = 'root';
        }

    }

    protected function dbConnect()
    {
        $db = new \PDO('mysql:host=' . $this->dbhost . ';dbname=' . $this->dbname . ';charset=utf8', $this->dbuser, $this->dbpassword);
        return $db;
    }
}