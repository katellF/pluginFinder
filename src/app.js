//import React from 'react';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './styles/styles.css';
import HomeSearch from './components/HomeSearch';
//import MySpace from './components/MySpace';



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


class MySpace extends React.Component {

    constructor() {
        super();
       // this.getAPIListFavorites =  this.getAPIListFavorites.bind(this);
    //    // this.pluginName = "test"
         this.state = {
             data: [],
         };

     }

   //   getAPIListFavorites () {
   //
   //     const res =fetch('/projetsoc/pluginFinder/index.php?action=API/listFavorites')
   //          .then(res => res.json())
   //         .then (json =>this.setState((prevState) =>{
   //           return {
   //               data: prevState.data
   //           }}))
   //
   // };

     componentDidMount(){
          //console.log("ca fonctionne");
         fetch('http://localhost:8888/projetsoc/pluginFinder/index.php?action=API/listFavorites')
             .then(results => results.json())
             .then(json => this.setState({data:json}));
     };

             //.then(json => this.setState({ data: json }));

         // });



        // return json

   //  async getAPIListFavorites() {
   //
   // const url='/projetsoc/pluginFinder/index.php?action=API/listFavorites';
   //  const response = await fetch(url);
   //  console.log(url);
   //      await response.json();
   //      this.setState((json) =>{
   //        return {
   //             data: json.data
   //              }
   //          }
   //        )
   //  }


    // console.log(json);
    // // console.log(template);
//
//     return json;
//







    render() {

        //console.log(this.state.data);
        // const listfav = this.state.data.map((json, index) =>
        // <p key={index}>{json.pluginName} --- {json.pluginId}</p>);
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
// getAPIListFavorites().then ( data => {
// //
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


//export default MySpace;
// if ( currentPage && currentPage === "homeView") {
//   ReactDOM.render(<HomeSearch />, document.getElementById('app'));
//  } else {

ReactDOM.render( <MySpace />, document.getElementById('app') );


