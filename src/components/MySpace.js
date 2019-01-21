import React from 'react';
import React, { Component } from "react";
import Config from '../config.js';
//import Content from './Content';
//import Sidebar from './SideBar';


class MySpace extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
        };

    }


    componentDidMount(){

        fetch('http://localhost:8888/projetsoc/pluginFinder/index.php?action=API/listFavorites')
            .then(results => results.json())
            .then(json => this.setState({data:json}));
    };



    render() {
        return (

            <div>
                <h1 >Mes Favoris</h1>

                <p>{this.state.data.map((json, index) =>

                    <p key={index}>{json.pluginName} --- {json.pluginId}</p>
                )}</p>
            </div>
        );
    }
}

 export default MySpace;
