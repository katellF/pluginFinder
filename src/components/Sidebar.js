import React from 'react';
import {RefinementList, RatingMenu , NumericMenu} from 'react-instantsearch/dom';


const Sidebar = (props) =>

    <div className="aside sidebar col-2" >
        <h5 className="sidebar__tags">{props.title}</h5>

        <RefinementList attribute="lang_labels_tags._tags"/>


        <h5 className="sidebar__tags">Tags</h5>

        <RefinementList attribute="tags_filter._tags"/>


        <h5 className="sidebar__tags">Rating</h5>

        <RatingMenu attribute="rating_facet"/>


        <h5 className="sidebar__tags">Last Update</h5>

        <RefinementList attribute="last_update_range"/>

        <h5 className="sidebar__tags">Installs</h5>
            <NumericMenu
                attribute="installs"
                items={[
                    { end: 1000, label: ' < 1000' },
                    { start: 1001, end: 10000, label: ' 1K - 10K' },
                    { start: 10001, end: 100000, label: ' 10K - 100K' },
                    { start: 100001, label: ' > 100K' },
                ]}
            />
        <h5 className="sidebar__tags">Plugin Type</h5>

        <RefinementList attribute="plugin_class"/>
    </div>


// class Sidebar extends React.Component {
//
//     constructor(props){
//         super(props);
//         this.setValues = this.setValues.bind(this);
//         this.state = {
//             query: 'query',
//             maxFacetHits: 10
//         };
//     }
//
// setValues(){
//         this.setState(() =>{
//
//             return {
//                 maxFacetHits: 5
//             };
//     })
// }
//
//
//     render(){
// //console.log(this.setValues());
//         //this.setValues();
//         return(
//
//             <div className="aside sidebar col-2" >
//             <h5 className="sidebar__tags">Languages</h5>
//
//             <RefinementList attribute="lang_labels_tags._tags"/>
//
//
//             <h5 className="sidebar__tags">Tags</h5>
//
//             <RefinementList attribute="tags_filter._tags"/>
//
//
//             <h5 className="sidebar__tags">Rating</h5>
//
//             <RefinementList attribute="rating"/>
//
//
//             <h5 className="sidebar__tags">Installs</h5>
//
//             <RefinementList attribute="installs"/>
//
//             <h5 className="sidebar__tags">Plugin Type</h5>
//
//             <RefinementList attribute="plugin_class"/>
//             </div>
//
//
//         )
//
// }



export default Sidebar;