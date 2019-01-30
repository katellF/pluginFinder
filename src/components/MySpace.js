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

    // deletePlugin () {
    //     console.log("it works");
    //     this.setState(() => {
    //         return {
    //             data: []
    //         };
    //     });
    //
    // }

    deletePlugin (e) {
        // console.log("it works");
        // this.setState(() => {
        //     return {
        //         data: []
        //     };
        // });
        let clickedPluginId = jQuery(e.currentTarget).data('id');
       // let clickedPluginName = jQuery(e.currentTarget).data('name');
        // console.log(e);

        console.log(clickedPluginId);
       // console.log(clickedPluginName);

        jQuery.ajax({
            method: "GET",
            url: Config.base_url + "/pluginfinder/index.php",
            dataType: "json",
            data: 'action=API/deleteFavorite/'+clickedPluginId+'',
            success: function() {
                //console.log("element",e);
                jQuery('#plugin_'+clickedPluginId).remove();
                //jQuery('#toto').remove();


                //this.render();
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

                    <div key={index} id={`plugin_${json.pluginId}`} className="d-flex justify-content-around mySpace_favorite align-items-center
">
                        <h2>{json.pluginId}</h2>


                        <div className="d-flex flex-column justify-content-center mySpace__buttons">
                        <button key={json.pluginId} onClick={this.deletePlugin} data-id={json.pluginId} className="mySpace__delete mySpace--deleteLink">Delete</button>
                        <button key={json.pluginId} className="mySpace__moreInfo mySpace--moreInfoLink"><a className= "mySpace__link mySpace--moreInfoLink" href="https://wordpress.org/plugins/buddyforms/">More Info</a></button>
                        {/*<p><a href={hit.plugin_page_at_source} target="_blank" className="hit__moreInfo hit--moreInfoLink">More Info</a></p>*/}
                        {/*<p><a href=`https://wordpress.org/plugins/${json.pluginId}`target="_blank" className="hit__moreInfo hit--moreInfoLink">More Info</a></p>*/}
                        {/*<p><a href="#" className="mySpace__moreInfo mySpace--moreInfoLink" >More Info</a></p>*/}
                        </div>
                    </div>

                       )}</div>
                </div>

            </div>
        );
    }
}

 export default MySpace;
