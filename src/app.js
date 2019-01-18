import React from 'react';
import ReactDOM from 'react-dom';
import {Config} from './config.js';
import './styles/styles.css';
import App from './components/App';
import Content from './components/Content';
import Sidebar from './components/SideBar';
import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
    Stats,
    SortBy,
    Pagination,
    RefinementList
} from 'react-instantsearch/dom';

// const Hit = ({hit}) =>
//     <div className="hit">
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
//             <button className="hit-favorits">
//                 My favorites
//             </button>
//             <button className="hit-info">
//                 More Info
//             </button>
//
//         </div>
//     </div>

// const Sidebar = (props) =>
//
//     <div className="aside">
//         <h5>{props.title}</h5>
//
//
//         <RefinementList attribute="lang_labels_tags._tags"/>
//
//         <h5>tags</h5>
//
//         <RefinementList attribute="tags_filter._tags"/>
//         {/*<RefinementList attribute="manufacturer" searchable = {True} withSearchBox/>*/}
//     </div>

// const Content =() =>
//    // console.log( this.props);
//     <div className="content">
//         <div className="info flex justifyContentEnd">
//             <Stats/>
//             <SortBy
//                 defaultRefinement="wp_plugins"
//                 items={[
//                     { value: 'wp_plugins', label: 'Relevance' },
//                     { value: 'wp_plugins_installs_desc', label: 'Installs desc.' },
//                     { value: 'wp_plugins_rating_desc', label: 'Rating desc.' }
//                 ]}
//             />
//         </div>
//         <Hits hitComponent={Hit}/>
//         <div className={"pagination"}>
//             <Pagination showLast/>
//         </div>
//     </div>

// class App extends React.Component {
//     render() {
//          // console.log(this.props);
//         return (
//             <InstantSearch
//                 apiKey= {Config.apiKey}
//                 appId= {Config.appId}
//                 indexName={Config.index}>
//                 <header className="header marginBottom50 marginTop50">
//                     <SearchBox translations={{placeholder: 'Search for Plugins'}}/>
//                 </header>
//
//
//                 <main className="flex">
//                     <Sidebar title="Languages"/>
//                     <Content/>
//                 </main>
//             </InstantSearch>
//         );
//     }
// }

ReactDOM.render(<App />, document.getElementById('app'));

//export default App;


//console.log('App.js is running!');
