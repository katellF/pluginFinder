<?php


namespace Katell\Model;


class FavoritesManager extends Manager
{
    public function getFavorites($userId)
    {

        $db = $this->dbConnect();

        $req = $db->prepare('SELECT userId, pluginId, pluginName FROM favorites WHERE userId=:userId');
        //var_dump('toto');
        $req->execute(array('userId' => $userId));
        //var_dump($req);

        return $req;



    }

    public function delete($userId, $pluginId)
    {
        $db = $this->dbConnect();
        $deleteFavorite = $db->prepare('DELETE FROM favorites WHERE  userId=:userId AND pluginId=:pluginId ');
        $deleteFavorite->execute(array('userId' => $userId, 'pluginId' => $pluginId ));

        return $deleteFavorite;

    }
    public function add($data)
    {

        $db = $this->dbConnect();
        $addFavorite = $db->prepare('INSERT INTO favorites (userId, pluginId, pluginName) VALUES ( :userId, :pluginId, :pluginName  ) ');
        $addFavorite->execute(array(
            'userId' => $data['userId'],
            'pluginId' => $data['pluginId'],
            'pluginName' => $data['pluginName'],
        ));

        return $addFavorite;

    }
}