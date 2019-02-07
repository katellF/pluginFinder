import React, { Component } from "react";
import Config from '../config.js';
import {Hit} from './Hit';



class MySpace extends React.Component {

    constructor(props) {

        super(props);
        this.deletePlugin =  this.deletePlugin.bind(this);
        this.state = {
            data: [],
            isDeleted: "",
        };

    }


    // deletePlugin (e) {
    //
    //     let clickedPluginId = jQuery(e.currentTarget).data('id');
    //
    //
    //     console.log(clickedPluginId);
    //

        // jQuery.ajax({
        //     method: "GET",
        //     url: Config.base_url + "/pluginfinder/index.php",
        //     dataType: "json",
        //     data: 'action=API/deleteFavorite/'+clickedPluginId+'',
        //     success: function() {
        //
        //         jQuery('#plugin_'+clickedPluginId).remove();
        //
        //
        //         console.log("SUCCESS");
        //         console.log("Ca marche");
        //
        //     },
        //     error: function(e) {
        //         console.log(e);
        //         console.log('ERROR');
        //     }
        // })


    //}

    //react test
    deletePlugin (e) {
const clickedPluginId = e.currentTarget ;
       console.log(clickedPluginId);
       // let isInFavorites = listFavoritesIds.indexOf(clickedPluginId);
       //console.log(this.props.id);
        // let isInFavorites = listFavoritesIds.indexOf(hit.id);
        //
         fetch(Config.base_url + '/pluginfinder/index.php?action=API/deleteFavorite' + '/' + clickedPluginId )
           .then(results => results.json())
            .then(() => {
                this.setState((prevState) => {
                    // to remove the favorite from the array
                    //jQuery('#plugin_'+clickedPluginId).remove();
                    clickedPluginId.remove()
                     //
                    return {
                        data: []

                    };

                });
            })
             .catch((error) => console.error(error));
         //console.log(this.state.isFavorite);
        console.log('it is changing');

   }

    componentDidMount(){

        fetch(Config.base_url +'/pluginfinder/index.php?action=API/listFavorites')
            .then(results => results.json())
            .then(json => this.setState({data:json}));
    };


    render() {

        return (

            <div >
                <div className="mySpace">
                    <h1 className="mySpace_title">My Favorites Plugins</h1>
                    <div className="mySpace_list">{this.state.data.map((json, index) =>

                        <div key={index} id={`plugin_${json.pluginId}`} className="d-flex justify-content-around mySpace_favorite align-items-center">
                            <img width="100" height="100" src={"https://ps.w.org/"+json.pluginId+"/assets/icon-256x256.png"} alt="images"/>
                            <h2>{json.pluginId}</h2>
                            <div className="d-flex flex-column justify-content-center mySpace__buttons">
                            <button key={json.pluginId} onClick={this.deletePlugin} data-id={json.pluginId} className="mySpace__delete mySpace--deleteLink" id={json.pluginId}>Delete</button>
                            <button key={json.pluginId} className="mySpace__moreInfo mySpace--moreInfoLink"><a className= "mySpace--link" href={"https://wordpress.org/plugins/"+json.pluginId} target="_blank" >More Info</a></button>
                            </div>
                        </div>


                       )}</div>
                </div>

            </div>
        );
    }
}

 export default MySpace;
