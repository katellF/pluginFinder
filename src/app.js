import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import HomeSearch from './components/HomeSearch';

if ( currentPage && currentPage === "homeView") {
    ReactDOM.render(<HomeSearch />, document.getElementById('app'));
} else {



    getAPIListFavorites();
    // console.log ( api() );
//        api() ;
//    console.log(test);

    console.log ('no data');
}



async function getAPIListFavorites() {

    const response = await fetch('/projetsoc/pluginFinder/index.php?action=API/listFavorites');
    const json = await response.json();
    console.log(json);
}





ReactDOM.render( "Bonjour", document.getElementById('app') );
