import React from 'react';
import {RefinementList} from 'react-instantsearch/dom';


const Sidebar = (props) =>

    <div className="aside">
        <h5>{props.title}</h5>


        <RefinementList attribute="lang_labels_tags._tags"/>

        <h5>tags</h5>

        <RefinementList attribute="tags_filter._tags"/>
        {/*<RefinementList attribute="manufacturer" searchable = {True} withSearchBox/>*/}
    </div>

export default Sidebar;