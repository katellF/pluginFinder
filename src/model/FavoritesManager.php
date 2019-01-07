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

        return $deleteFavorite->execute(array('userId' => $userId, 'pluginId' => $pluginId ));

    }
}