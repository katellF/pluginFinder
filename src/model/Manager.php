<?php

abstract class Manager
{
    private $dbname;
    private $dbhost;
    private $dbuser;
    private $dbpassword;

    public function __construct()
    {
        $this->dbname = 'blog-projet4';
        $this->dbhost = 'localhost';
        $this->dbuser = 'root';
        $this->dbpassword = '';
    }

    protected function dbConnect()
    {
        $db = new \PDO('mysql:host=' . $this->dbhost . ';dbname=' . $this->dbname . ';charset=utf8', $this->dbuser, $this->dbpassword);
        return $db;
    }
}