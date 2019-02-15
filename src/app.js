import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import HomeSearch from './components/HomeSearch';
import MySpace from './components/MySpace';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


library.add(faHeart);

if ( currentPage && currentPage === "homeView") {
 ReactDOM.render(<HomeSearch />, document.getElementById('app'));
 } else {
ReactDOM.render( <MySpace />, document.getElementById('app') );
}


