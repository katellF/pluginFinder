import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import HomeSearch from './components/HomeSearch';

//let toto;

// const myFavorites = getAPIListFavorites();




// const template = (
//     <div>
//         <h1>{myFavorites.map((myFavorite) =>{
//             return <p key={myFavorite.index}>{myFavorite}</p>
//         })}</h1>
//     </div>
//
// );
// const arr = [123,124,125];
//
// const template = (
//     <div>
//         <h1>{arr.map((json1, index) =>{
//             return <p key={index}>{json1}</p>
//         })}</h1>
//     </div>
//
// );

// const template = (
//     <div>
//         <h1>{myFavorites.map((json1, index) =>{
//             return <p key={index}>{json1}</p>
//         })}</h1>
//     </div>
//
// );
//let template = "";
//const myFavorites = getAPIListFavorites()
//     .then( data => {
//
//     console.log(data)
//     // template = (<div>TEST</div>)
//     template = (
//         <div>
//             <h1>{data.map((json1, index) =>{
//                 return <p key={index}>{json1}</p>
//             })}</h1>
//         </div>
//
//     );
//         ReactDOM.render( template, document.getElementById('app') )
//     }
//
//
// )

//console.log(myFavorites);

//const template = (<div>TEST</div>)
// const template = (<div>{myFavorites}</div>)

    if ( currentPage && currentPage === "homeView") {
    ReactDOM.render(<HomeSearch />, document.getElementById('app'));
} else {

        getAPIListFavorites().then ( data => {

            const template = (
                <div>
                    <h1>{data.map((json1, index) =>{
                        // return <p key={Math.random()}></p>
                        return <p key={index}>{json1.pluginName} --- {json1.pluginId}</p>
                        //return <p key={index}>{json1}</p>
                    })}</h1>
                </div>
            );

            ReactDOM.render( template, document.getElementById('app') );

        });

        console.log($.fn.jquery);

//        ReactDOM.render( myFavorites, document.getElementById('app') );

        // console.log ( api() );
//        api() ;
//    console.log(test);

    console.log ('no data');
}



async function getAPIListFavorites() {

   // let test = [1,2,3];
    const response = await fetch('/projetsoc/pluginFinder/index.php?action=API/listFavorites');
    let json = await response.json();
    // const template = (
    //     <div>
    //         <h1>{json.map((json1, index) =>{
    //             // return <p key={Math.random()}></p>
    //             return <p key={index}>{json1[index]} ---- {index}</p>
    //             //return <p key={index}>{json1}</p>
    //         })}</h1>
    //     </div>

    // const arr = [123,124,125];
    //
    // const template = (
    //     <div>
    //         <h1>{arr.map((json1, index) =>{
    //             return <p key={index}>{json1}</p>
    //         })}</h1>
    //     </div>
    //
    // );
    // const template = (
    //     <div>
    //         <h1>{myFavorites.map((myFavorite) =>{
    //             return <p key={myFavorite.index}>{myFavorite}</p>
    //         })}</h1>
    //     </div>
    //
    // );
    console.log(json);
    // console.log(template);

    return json;

}





