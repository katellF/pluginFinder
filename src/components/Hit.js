//import React from 'react';
import React, { Component } from "react";
import {Highlight} from 'react-instantsearch/dom';


class Hit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.executeAjax = this.executeAjax.bind(this);

    }



    executeAjax(e) {

        let clickedPluginId = jQuery(e.currentTarget).data('id');
        console.log(e);

        console.log(clickedPluginId);

    jQuery.ajax({
        method: "GET",
        url: "/projetsoc/pluginFinder/index.php",
        dataType: "json",
        data: 'action=API/addFavorite/'+clickedPluginId+'/weglotname',
         success: function() {
             $('#'+clickedPluginId).replaceWith( "<div>Added</div>" );


///          //called when successful
                 console.log("SUCCESS");
        },
        error: function(e) {
            console.log(e);
             console.log('ERROR');
         }        // url: "/projetsoc/pluginFinder/index.php",
    })
//
//
    }



    render() {
    const {hit} =this.props;
       // {console.log(this.props)}
       // {console.log(this.executeAjax())}
        return (

            <div className="hit">
                <div className="hit-image">
                    <img width="100" height="100" src={hit.img_thumb} alt="images"/>
                </div>
                <div className="hit-content">
                    <div className="hit-name">
                        <Highlight attribute="name" hit={hit}/>
                    </div>
                    <div className="hit-description">
                        <Highlight attribute="short_description" hit={hit}/>
                    </div>

                    { isUserConnected ? (
                        <button onClick={this.executeAjax} className="hit-favorites" data-id={hit.id} id={hit.id}>Add to Favorites</button>
                    ) : (<a href="index.php?action=connect/redirect">Add to Favorites</a>)

                    }
                    {/*{showFavorite}*/}
                    <a href={hit.plugin_page_at_source} target="_blank">More Info</a>

                </div>
            </div>

        );
    }
}

export default Hit;


// const  Hit = ({hit}) =>
//
//     <div className="hit" id={"plugin_"+hit.id}>
//         <div className="hit-image">
//             <img width="100" height="100" src={hit.img_thumb} alt="images"/>
//         </div>
//         <div className="hit-content">
//             <div className="hit-name">
//                 <Highlight attribute="name" hit={hit}/>
//             </div>
//             <div className="hit-description">
//                 <Highlight attribute="short_description" hit={hit}/>
//             </div>
//
//             { isUserConnected ? (
//                 <button className="hit-favorites" id={hit.id}>Add to Favorites</button>
//             ) : (<a href="index.php?action=connect">Add to Favorites</a>)
//
//             }
//             {/*{showFavorite}*/}
//             <a href={hit.plugin_page_at_source} target="_blank">More Info</a>
//
//         </div>
//     </div>
//
// export default Hit;

