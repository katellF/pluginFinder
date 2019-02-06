import Config from '../config.js';
import React, { Component } from "react";
import {Highlight} from 'react-instantsearch/dom';


class Hit extends React.Component {

    constructor(props) {
        super(props);
        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
        //this.apiAddFavorite = this.apiAddFavorite.bind(this);
        this.state = {
             isFavorite: false,
         };
    }


    // addFavorite(e) {
    //
    //     console.log("favortie from hit component");
    //     let clickedPluginId = jQuery(e.currentTarget).data('id');
    //     let clickedPluginName = jQuery(e.currentTarget).data('name');
    //     console.log(clickedPluginId);
    //     console.log(clickedPluginName);
    //     //console.log(this.removeFavorite);
    //
    //     jQuery.ajax({
    //     method: "GET",
    //     url: Config.base_url + "/pluginfinder/index.php",
    //     dataType: "json",
    //     data: 'action=API/addFavorite/'+clickedPluginId+'/'+clickedPluginName+'/',
    //      success:
    //          function() {
    //          $('#'+clickedPluginId).replaceWith( "<p class=\"hit_center\"><isFavorite class=\"hit-favorites hit__add hit--addLink\" onclick=\"this.removeFavorite\" data-id="+clickedPluginId+" data-name="+clickedPluginName+" id="+clickedPluginId+">Remove</isFavorite></p>");
    //          listFavoritesIds.push(clickedPluginId);
    //      console.log("Ca marche addFavorite");
    //          console.log("this",this);
    //          console.log("SUCCESSssssss");
    //     }
    //     ,
    //     error: function(e) {
    //         console.log(e);
    //          console.log('ERROR');
    //      }
    // })
    // }

    addFavorite(){

        // this.setState((prevState) => {
        //     return {
        //         isFavorite: !prevState.isFavorite
        //
        //     };
        //
        //  });

        const {hit} =this.props;

        console.log(hit.id);

        // console.log(hit.id);
        console.log(hit.name);

        fetch(Config.base_url +'/pluginfinder/index.php?action=API/addFavorite'+'/'+ hit.id+'/'+ hit.name)
            .then(results => results.json())
           // .then(console.log("results",results))
            .then(() => {
                this.setState((prevState) => {
                    return {
                        isFavorite: !prevState.isFavorite

                    };

                });
            })
            .catch((error) => console.error(error));
    }

    removeFavorite(){
        const {hit} =this.props;
        this.setState((prevState) => {
            return {
                isFavorite: !prevState.isFavorite
            }

        });
        fetch(Config.base_url +'/pluginfinder/index.php?action=API/deleteFavorite'+'/'+ hit.id+'/'+ hit.name)
            .then(results => results.json())
            .then(() => {
                this.setState((prevState) => {
                    return {
                        isFavorite: !prevState.isFavorite
                    };
                });
            })
            .catch((error) => console.error(error));
    }






    // apiAddFavorite(){
    //
    //     fetch(Config.base_url +'/pluginfinder/index.php?action=API/addFavorite'+'/'+this.props.id+'/'+this.props.name)
    //         .then(results => results.json())
    //         .catch((error) => console.error(error));
    //
    // };

    // removeFavorite (e) {
    //
    //     console.log("REMOVE from hit component");
    //
    //
    //     let clickedPluginId = jQuery(e.currentTarget).data('id');
    //     let clickedPluginName = jQuery(e.currentTarget).data('name');
    //
    //
    //     console.log(clickedPluginId);
    //
    //
    //     jQuery.ajax({
    //         method: "GET",
    //         url: Config.base_url + "/pluginfinder/index.php",
    //         dataType: "json",
    //         data: 'action=API/deleteFavorite/'+clickedPluginId+'/'+clickedPluginName+'/',
    //         success:
    //
    //             function() {
    //                 jQuery('#' + clickedPluginId).replaceWith("<p class=\"hit_center\"><isFavorite onclick=\"this.addFavorite\" class=\"hit-favorites hit__add hit--addLink\" data-id=" + clickedPluginId + " data-name=" + clickedPluginName + " id=" + clickedPluginId + ">Remove</isFavorite></p>");
    //                 // listFavoritesIds.reverse(clickedPluginId);
    //                 console.log("Ca marche removeFavorite");
    //
    //
    //                 console.log("SUCCESS");
    //             },
    //
    //         error: function(e) {
    //             console.log(e);
    //             console.log('ERROR');
    //         }
    //     })
    // }

//     render() {
//
//         console.log(this.state.isFavorite);
//         const {hit} =this.props;
//
// //console.log("this",this);
//         // We check if the pluginId is present in the listFavoritesIds and we show/hide the Add isFavorite as needed
//         // let isInFavorites = listFavoritesIds.indexOf(hit.id);
//         // let isFavorite = false;
//         //
//         // if ( isInFavorites > -1) {
//         //     isFavorite = true;
//         // }
//
//
//         return (
//
//             <div className="hit">
//                 <div className="hit-image">
//                     <img width="100" height="100" src={hit.img_thumb} alt="images"/>
//                 </div>
//                 <div className="hit-content hitPerso">
//                     <div className="hit-name hit__namePerso">
//                         <Highlight attribute="name" hit={hit}/>
//                     </div>
//                     <div className="hit-description">
//                         <Highlight attribute="short_description" hit={hit}/>
//                     </div>
//
//                     { isUserConnected
//                         ? ( this.state.isFavorite ? (<RemoveFavorite/>)
//                                 : (<AddFavorite/>)
//                         ) : (<p className="hit_center hit_buttonBlue"><a href="index.php?action=connect/redirect" className={"hit__add"}>Add to Favorites</a></p>)
//                     }
//
//                     <p className="hit_center hit_buttonGrey"><a href={hit.plugin_page_at_source} target="_blank" className="hit__moreInfo hit--moreInfoLink">More Info</a></p>
//
//
//                 </div>
//             </div>
//
//         );
//     }
//


    render() {

        console.log(this.state.isFavorite);
    const {hit} =this.props;
        //console.log(hit.id);

//console.log("this",this);
   // We check if the pluginId is present in the listFavoritesIds and we show/hide the Add isFavorite as needed
    let isInFavorites = listFavoritesIds.indexOf(hit.id);
   // let isFavorite = false;

    if ( isInFavorites > -1) {
        this.state.isFavorite = true;
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
                        ? ( this.state.isFavorite ? (<p className={"hit_center"}>
                                    <button onClick={this.removeFavorite} className="hit-favorites hit__add hit--addLink" data-id={hit.id} data-name={hit.name} id={hit.id}>Remove</button></p>)
                                : (<p className={"hit_center"}>
                                    <button onClick={this.addFavorite} className="hit-favorites hit__add hit--addLink" data-id={hit.id} data-name={hit.name} id={hit.id}>
                                        Add to favorites
                                </button>
                                </p>)
                        ) : (<p className="hit_center hit_buttonBlue"><a href="index.php?action=connect/redirect" className={"hit__add"}>Add to Favorites</a></p>)
                    }

                    <p className="hit_center hit_buttonGrey"><a href={hit.plugin_page_at_source} target="_blank" className="hit__moreInfo hit--moreInfoLink">More Info</a></p>


                </div>
            </div>

        );
    }



}

export default Hit;


