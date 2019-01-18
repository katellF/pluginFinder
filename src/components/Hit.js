import React from 'react';
import {Highlight} from 'react-instantsearch/dom';

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
            <button className="hit-favorits">
                My favorites
            </button>
            <button className="hit-info">
                More Info
            </button>

        </div>
    </div>

export default Hit;