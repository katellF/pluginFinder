<?php

//echo 'API VIEW';


// If $data is a PDO object then we fetch the data and we turn it into JSON
if ( is_object($data) ){

    $data = $data->fetch();

}

// if $data is a simple array, we turn it into JSON immediately
$data_json = json_encode($data);




header('Content-Type: application/json');
echo $data_json;

//var_dump($data_json);