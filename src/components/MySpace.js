import React, { Component } from "react";
import Config from '../config.js';
import {Hit} from './Hit';



class MySpace extends React.Component {

    constructor(props) {

        super(props);
        this.deletePlugin =  this.deletePlugin.bind(this);
        this.state = {
            data: [],
            isDeleted: false,
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

    //react test1
//     deletePlugin (e) {
// const clickedPluginId = e.currentTarget ;
//        console.log(clickedPluginId);
//        // let isInFavorites = listFavoritesIds.indexOf(clickedPluginId);
//        //console.log(this.props.id);
//         // let isInFavorites = listFavoritesIds.indexOf(hit.id);
//         //
//          fetch(Config.base_url + '/pluginfinder/index.php?action=API/deleteFavorite' + '/' + clickedPluginId )
//            .then(results => results.json())
//             .then(() => {
//            // let pluginIndex = array.indexOf(clickedPluginId);
//                 const pluginRemoved = this.state.data.filter(data => {
//                     return data !== clickedPluginId;
//                 });
//                 this.setState({
//                     // to remove the favorite from the array
//                     //jQuery('#plugin_'+clickedPluginId).remove();
//                     //prevState.data.splice(pluginIndex, 1);
//                      //
//
//
//
//                    // return {
//                       //  data: prevState.data
//
//                     data: [...pluginRemoved]
//
//                 });
//             })
//              .catch((error) => console.error(error));
//          //console.log(this.state.isFavorite);
//         //console.log(data);
//
//    }
//react test2
//     deletePlugin (e,favoriteToRemove) {
//         const clickedPluginId = e.currentTarget ;
//         //const favorite = this.state.data.pluginId;
//         //console.log('fav',favorite)
//         fetch(Config.base_url + '/pluginfinder/index.php?action=API/deleteFavorite' + '/' + clickedPluginId )
//           .then(results => results.json())
//            .then(() => {
//                 this.setState((prevState) => ({
//
//                 data: prevState.data.filter((favorite) =>{
//                 return favoriteToRemove !== favorite;
//           })
//       }));
//
//         console.log(favoriteToRemove);
//         console.log(favoriteToRemove);
//     }


    // deletePlugin (favoriteToRemove) {
    //     const newFavorite = this.state.data.filter(favorite => {
    //         return favorite !== favoriteToRemove;
    //     });
    //         this.setState({
    //             data: [...newFavorite]
    //         })
    //     //console.log(favorite);
    //    // console.log(favoriteToRemove);
    // }




    // deletePlugin (favorite) {
    //     console.log('dp',favorite);
    //
    // }

        deletePlugin (favoriteToRemove) {
        let isIndexOf = this.state.data.indexOf(favoriteToRemove);
        console.log(isIndexOf);
            fetch(Config.base_url + '/pluginfinder/index.php?action=API/deleteFavorite' + '/' + favoriteToRemove )
                .then(results =>results.json())
                .then (() => {
                    const newFavorite = this.state.data.filter(favorite => {
                                return favorite !== favoriteToRemove;
                             });
                    this.setState(() => {
                        //console.log(newFavorite);

                        return {
                            data:[...newFavorite]
                        };
                        })

                    //this.state.data.splice(isIndexOf,1);



                    })


        }

    // isInFavorites(favoriteToRemove) {
    //     //const {hit} = this.props;
    //     let isInFavorites = this.state.data.indexOf(favoriteToRemove);
    //     if (isInFavorites > -1) {
    //         this.state.data = true;
    //     }
    // }





            componentDidMount(){

        fetch(Config.base_url +'/pluginfinder/index.php?action=API/listFavorites')
            .then(results => results.json())
            .then(json => this.setState({data:json}));
    };


    render() {
        //console.log(this.deletePlugin(json.pluginId));

        let isIndexOf = this.state.data.indexOf(this.state.data.id);
        console.log(isIndexOf);
        if (isIndexOf !== -1) {
            this.state.isDeleted = true;
        }
        return (

            <div >
                <div className="mySpace">
                    <h1 className="mySpace_title">My Favorites Plugins</h1>
                    <div className="mySpace_list">{this.state.data.map((json, index) =>
                        <div key={index} id={`plugin_${json.pluginId}`} className="d-flex justify-content-around mySpace_favorite align-items-center">
                            <img width="100" height="100" src={"https://ps.w.org/"+json.pluginId+"/assets/icon-256x256.png"} alt="images"/>
                            <h2>{json.pluginId}</h2>
                            <div className="d-flex flex-column justify-content-center mySpace__buttons">
                                { this.state.isDeleted ? (<p> rien </p>) :
                            <button key={json.pluginId} onClick={(e) =>{this.deletePlugin(json.pluginId);}} data-id={json.pluginId} className="mySpace__delete mySpace--deleteLink" id={json.pluginId}>
                                Delete
                            </button>}
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


