import React, { Component } from "react";
import ReactDOM from 'react-dom';
import HomeSearch from './components/HomeSearch';
import MySpace from './components/MySpace';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


if ( currentPage && currentPage === "homeView") {
 ReactDOM.render(<HomeSearch />, document.getElementById('app'));
 } else {
ReactDOM.render( <MySpace />, document.getElementById('app') );
}


