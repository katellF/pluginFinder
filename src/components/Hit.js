import Config from '../config.js';
import React, { Component } from "react";
import {Highlight} from 'react-instantsearch/dom';


class Hit extends React.Component {

    constructor(props) {
        super(props);
        this.addFavorite = this.addFavorite.bind(this);
    }


    addFavorite(e) {

        let clickedPluginId = jQuery(e.currentTarget).data('id');
        let clickedPluginName = jQuery(e.currentTarget).data('name');

        console.log(clickedPluginId);
        console.log(clickedPluginName);

        jQuery.ajax({
        method: "GET",
        url: Config.base_url + "/pluginfinder/index.php",
        dataType: "json",
        data: 'action=API/addFavorite/'+clickedPluginId+'/'+clickedPluginName+'/',
         success: function() {
             $('#'+clickedPluginId).replaceWith( "<p class=\"hit_center\"><button onclick=\"this.removeFavorite\" class=\"hit-favorites hit__add hit--addLink\" data-id="+clickedPluginId+" data-name="+clickedPluginName+" id="+clickedPluginId+">Remove</button></p>");
             listFavoritesIds.push(clickedPluginId);


             console.log("SUCCESS");
        },
        error: function(e) {
            console.log(e);
             console.log('ERROR');
         }
    })
    }

    removeFavorite (e) {

        let clickedPluginId = jQuery(e.currentTarget).data('id');
        let clickedPluginName = jQuery(e.currentTarget).data('name');


        console.log(clickedPluginId);


        jQuery.ajax({
            method: "GET",
            url: Config.base_url + "/pluginfinder/index.php",
            dataType: "json",
            data: 'action=API/deleteFavorite/'+clickedPluginId+'/'+clickedPluginName+'/',
            success: function() {
                jQuery('#'+clickedPluginId).replaceWith( "<p class=\"hit_center\"><button onclick=\"this.addFavorite\" class=\"hit-favorites hit__add hit--addLink\" data-id="+clickedPluginId+" data-name="+clickedPluginName+" id="+clickedPluginId+">Remove</button></p>");
                // listFavoritesIds.reverse(clickedPluginId);
                console.log("Ca marche");


                console.log("SUCCESS");


            },
            error: function(e) {
                console.log(e);
                console.log('ERROR');
            }
        })
    }


    //

    render() {
    const {hit} =this.props;


    // We check if the pluginId is present in the listFavoritesIds and we show/hide the Add button as needed
    let isInFavorites = listFavoritesIds.indexOf(hit.id);
    let isFavorite = false;

    if ( isInFavorites > -1) {
        isFavorite = true;
    }


        return (

            <div className="hit">
                <div className="hit-image">
                    <img width="100" height="100" src={hit.img_thumb} alt="images"/>
                </div>
                <div className="hit-content hitPerso">
                    <div className="hit-name hit__namePerso">
                        <Highlight attribute="name" hit={hit}/>
                    </div>
                    <div className="hit-description">
                        <Highlight attribute="short_description" hit={hit}/>
                    </div>

                    { isUserConnected
                        ? ( isFavorite ? (<p className={"hit_center"}><button onClick={this.removeFavorite} className="hit-favorites hit__add hit--addLink" data-id={hit.id} data-name={hit.name} id={hit.id}>Remove</button></p>)
                                : (<p className={"hit_center"}><button onClick={this.addFavorite} className="hit-favorites hit__add hit--addLink" data-id={hit.id} data-name={hit.name} id={hit.id}>Add to Favorites</button></p>)
                        ) : (<p className="hit_center hit_buttonBlue"><a href="index.php?action=connect/redirect" className={"hit__add"}>Add to Favorites</a></p>)
                    }

                    <p className="hit_center hit_buttonGrey"><a href={hit.plugin_page_at_source} target="_blank" className="hit__moreInfo hit--moreInfoLink">More Info</a></p>

                </div>
            </div>

        );
    }
}

export default Hit;


