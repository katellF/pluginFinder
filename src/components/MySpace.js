import React, { Component } from "react";
import Config from '../config.js';




class MySpace extends React.Component {

    constructor(props) {

        super(props);
        this.deletePlugin =  this.deletePlugin.bind(this);
        this.state = {
            data: [],
        };

    }


    deletePlugin (e) {

        let clickedPluginId = jQuery(e.currentTarget).data('id');


        console.log(clickedPluginId);


        jQuery.ajax({
            method: "GET",
            url: Config.base_url + "/pluginfinder/index.php",
            dataType: "json",
            data: 'action=API/deleteFavorite/'+clickedPluginId+'',
            success: function() {

                jQuery('#plugin_'+clickedPluginId).remove();


                console.log("SUCCESS");
                console.log("Ca marche");

            },
            error: function(e) {
                console.log(e);
                console.log('ERROR');
            }
        })


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
                            <h2>{json.pluginId}</h2>
                            <div className="d-flex flex-column justify-content-center mySpace__buttons">
                            <button key={json.pluginId} onClick={this.deletePlugin} data-id={json.pluginId} className="mySpace__delete mySpace--deleteLink">Delete</button>
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
