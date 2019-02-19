import React, {Component} from "react";
import Config from '../config.js';
import {Hit} from './Hit';


class MySpace extends React.Component {

    constructor(props) {

        super(props);
        this.deletePlugin = this.deletePlugin.bind(this);
        this.shortName = this.shortName.bind(this);
        this.state = {
            data: [],
            message:"You don't have any favorites"

        };

    }


    deletePlugin(favoriteToRemove) {

        fetch(Config.base_url + '/pluginfinder/index.php?action=API/deleteFavorite/'+ favoriteToRemove)
            .then(results => results.json())
            .then(() => {

                this.state.data.map(i => {
                    if (i.pluginId === favoriteToRemove) {
                        confirm("Do you want to delete this plugin from your favorites ");
                        this.state.data.splice(i, 1);
                        this.setState((prevState) => {
                            return {
                                data: prevState.data
                            }
                        });

                    }

                });
            })
    }


    componentDidMount() {

        fetch(Config.base_url + '/pluginfinder/index.php?action=API/listFavorites')
            .then(results => results.json())
            .then(json => this.setState({data: json}));

    };


    shortName(name) {

        let stringLength = name.length;

        if (stringLength > 50) {

            return name.substring(0, 50) + '...';
        } else {
            return name;
        }

    }


    render() {

        if (this.state.data.length === 0) {
            return (
                <div key={'noPlugins'} className="mySpace">
                    <h1 className="mySpace_title">My Favorites Plugins</h1>
                    <p className="mySpace_list mySpace_favorite mySpace_noFavorite">{this.state.message}</p>
                </div>);
        } else {

            return (

                <div>
                    <div className="mySpace">
                        <h1 className="mySpace_title">My Favorites Plugins</h1>
                        <div className="mySpace_list">{this.state.data.map((json, index) => <div key={index} id={`plugin_${json.pluginId}`} className="d-flex justify-content-between mySpace_favorite align-items-center">
                                <object key={'defaultImg_' + json.pluginId} className={"imageFav"} width="100" height="100"
                                        data={"https://ps.w.org/" + json.pluginId + "/assets/icon-256x256.png"}
                                        type="image/png">
                                    <img width="100" height="100"
                                         src={"https://www.katellfracassi.com/pluginfinder/public/img/logo_2.png"}
                                         alt="images"/>
                                </object>
                                <div>
                                    <h2>{json.pluginId.substring(0, 20)}</h2>
                                    <p>{this.shortName(json.pluginName)}</p>
                                </div>
                                <div className="d-flex flex-column justify-content-center mySpace__buttons">
                                    <button key={'del_' + json.pluginId} onClick={(e) => {
                                        this.deletePlugin(json.pluginId);
                                    }} data-id={json.pluginId} className="button_blue mySpace__delete"
                                            id={json.pluginId}>
                                        Delete
                                    </button>
                                    <button key={'info_' + json.pluginId}
                                            className="mySpace__moreInfo mySpace--moreInfoLink button_grey">
                                        <a className="mySpace--link" href={"https://wordpress.org/plugins/" + json.pluginId}
                                           target="_blank">More Info</a>
                                    </button>
                                </div>
                            </div>
                        )}</div>
                    </div>

                </div>
            );
        }
    }


}

export default MySpace;


