import React, { Component } from "react";
import {Highlight} from 'react-instantsearch/dom';


class Hit extends React.Component {

    constructor(props) {
        super(props);
        this.executeAjax = this.executeAjax.bind(this);

    }


    executeAjax(e) {

        let clickedPluginId = jQuery(e.currentTarget).data('id');
        let clickedPluginName = jQuery(e.currentTarget).data('name');
       // console.log(e);

        console.log(clickedPluginId);
        console.log(clickedPluginName);

        jQuery.ajax({
        method: "GET",
        url: "/projetsoc/pluginFinder/index.php",
        dataType: "json",
        data: 'action=API/addFavorite/'+clickedPluginId+'/'+clickedPluginName+'/',
         success: function() {
             $('#'+clickedPluginId).replaceWith( "<div>Added</div>" );



                 console.log("SUCCESS");
        },
        error: function(e) {
            console.log(e);
             console.log('ERROR');
         }
    })

    }


    render() {
    const {hit} =this.props;

        return (

            <div className="hit">
                <div className="hit-image">
                    <img width="100" height="100" src={hit.img_thumb} alt="images"/>
                </div>
                <div className="hit-content">
                    <div className="hit-name">
                        <Highlight attribute="name" hit={hit}/>
                    </div>
                    <div className="hit-description">
                        <Highlight attribute="short_description" hit={hit}/>
                    </div>

                    { isUserConnected ? (
                        <button onClick={this.executeAjax} className="hit-favorites" data-id={hit.id} data-name={hit.name} id={hit.id}>Add to Favorites</button>
                    ) : (<a href="index.php?action=connect/redirect">Add to Favorites</a>)

                    }
                    {/*{showFavorite}*/}
                    <a href={hit.plugin_page_at_source} target="_blank">More Info</a>

                </div>
            </div>

        );
    }
}

export default Hit;


