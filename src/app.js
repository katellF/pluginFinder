//import React from 'react';


import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import HomeSearch from './components/HomeSearch';
import MySpace from './components/MySpace';



//     if ( currentPage && currentPage === "homeView") {
//     ReactDOM.render(<HomeSearch />, document.getElementById('app'));
// } else {
//
//         getAPIListFavorites().then ( data => {
//
//             const template = (
//                 <div>
//                     <h1>{data.map((json1, index) =>{
//                         // return <p key={Math.random()}></p>
//                         return <p key={index}>{json1.pluginName} --- {json1.pluginId}</p>
//                         //return <p key={index}>{json1}</p>
//                     })}</h1>
//                 </div>
//             );
//
//             ReactDOM.render( template, document.getElementById('app') );
//
//         });
//
//
//     console.log ('no data');
// }



// async function getAPIListFavorites() {
//
//    // let test = [1,2,3];
//     const response = await fetch('/projetsoc/pluginFinder/index.php?action=API/listFavorites');
//     let json = await response.json();
//     console.log(json);
//     // console.log(template);
//
//     return json;
//
// }


// class MySpace extends React.Component {
//
//     constructor() {
//         super();
//         this.state = {
//              data: [],
//          };
//
//      }
//
//
//     componentDidMount(){
//
//         fetch('http://localhost:8888/projetsoc/pluginFinder/index.php?action=API/listFavorites')
//              .then(results => results.json())
//              .then(json => this.setState({data:json}));
//      };
//
//
//
//     render() {
//         return (
//
//             <div>
//                 <h1 >Mes Favoris</h1>
//
//                 <p>{this.state.data.map((json, index) =>
//
//                     <p key={index}>{json.pluginName} --- {json.pluginId}</p>
//                 )}</p>
//             </div>
//         );
//     }
// }

if ( currentPage && currentPage === "homeView") {
 ReactDOM.render(<HomeSearch />, document.getElementById('app'));
 } else {
ReactDOM.render( <MySpace />, document.getElementById('app') );
}


