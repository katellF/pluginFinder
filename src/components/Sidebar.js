import React from 'react';
import {RefinementList} from 'react-instantsearch/dom';


const Sidebar = (props) =>

    <div className="aside sidebar col-2" >
        <h5 className="sidebar__tags">{props.title}</h5>


        <RefinementList attribute="lang_labels_tags._tags"/>

        <h5 className="sidebar__tags">tags</h5>

        <RefinementList attribute="tags_filter._tags"/>
    </div>

export default Sidebar;