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
        };

    }


    deletePlugin(favoriteToRemove) {
        let isIndexOf = this.state.data.indexOf(favoriteToRemove);
        console.log(isIndexOf);
        fetch(Config.base_url + '/pluginfinder/index.php?action=API/deleteFavorite' + '/' + favoriteToRemove)
            .then(results => results.json())
            .then(() => {

                this.state.data.map(i => {
                        if (i.pluginId === favoriteToRemove) {
                            console.log("Remove", favoriteToRemove);
                            const response = confirm("Do you want to delete this plugin from your favorites ");

                            if (response) {
                                console.log('ok');
                            } else {
                                console.log('cancel');
                                event.preventDefault();
                            }

                            this.setState((prevState) => {
                                this.state.data.splice(i, 1);
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

    shortName(name){

        let stringLength = name.length;

        if ( stringLength > 50 ){

            return name.substring(0,50)+'...';
        } else {
          return name;
        }

    }

    render() {

        return (

            <div>
                <div className="mySpace">
                    <h1 className="mySpace_title">My Favorites Plugins</h1>
                    <div className="mySpace_list">{this.state.data.map((json, index) =>
                            <div key={index} id={`plugin_${json.pluginId}`}
                             className="d-flex justify-content-between mySpace_favorite align-items-center">
                            <img className={"imageFav"} width="100" height="100"
                                 src={"https://ps.w.org/" + json.pluginId + "/assets/icon-256x256.png"} alt="images"/>
                                <div>
                                <h2>{json.pluginId.substring(0,20)}</h2>
                            {/*fix for algolia badly encoded descriptions*/}
                            {/*<p dangerouslySetInnerHTML={{ __html: this.shortName(json.pluginName)}}></p>*/}
                            <p>{this.shortName(json.pluginName)}</p>
                                </div>
                            <div className="d-flex flex-column justify-content-center mySpace__buttons">
                                <button key={'del_' + json.pluginId} onClick={(e) => {
                                        this.deletePlugin(json.pluginId);
                                    }} data-id={json.pluginId} className="mySpace__delete mySpace--deleteLink"
                                            id={json.pluginId}>
                                        Delete
                                    </button>
                                <button key={'info_' + json.pluginId}
                                        className="mySpace__moreInfo mySpace--moreInfoLink"><a className="mySpace--link" href={"https://wordpress.org/plugins/" + json.pluginId} target="_blank">More
                                    Info</a></button>
                            </div>
                        </div>
                    )}</div>
                </div>

            </div>
        );
    }
}

export default MySpace;


