import React from 'react';
import {Highlight} from 'react-instantsearch/dom';


let showFavorite;
if ( isUserConnected) {
    showFavorite =  (<button className="hit-favorits" id={hit.id}>Add to Favorites</button>)
} else {
    showFavorite = "";
}



const  Hit = ({hit}) =>
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
            {showFavorite}
            <a href={hit.plugin_page_at_source} target="_blank">More Info</a>

        </div>
    </div>

export default Hit;

