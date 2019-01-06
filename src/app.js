import React, {Component} from 'react';
import {Config} from './config.js';

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

const Hit = ({hit}) =>
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
        </div>
    </div>

const Sidebar = () =>
    <div className="aside">
        <h5>Languages</h5>
        <RefinementList attribute="lang_labels_tags._tags"/>

        <h5>Tags</h5>
        <RefinementList attribute="tags_filter._tags"/>
        {/*<RefinementList attribute="manufacturer" searchable = {True} withSearchBox/>*/}
    </div>

const Content = () =>

    <div className="content">
        <div className="info">
            <Stats/>
            <SortBy
                defaultRefinement="wp_plugins"
                items={[
                    { value: 'wp_plugins', label: 'Relevance' },
                    { value: 'wp_plugins_installs_desc', label: 'Installs desc.' },
                    { value: 'wp_plugins_rating_desc', label: 'Rating desc.' }
                ]}
            />
        </div>
        <Hits hitComponent={Hit}/>
        <div className={"pagination"}>
            <Pagination showLast/>
        </div>
    </div>

class App extends Component {
    render() {
        return (
            <InstantSearch
                apiKey= {Config.apiKey}
                appId= {Config.appId}
                indexName={Config.index}>
                <header className={"header"}>
                    <SearchBox translations={{placeholder: 'Search for Plugins'}}/>
                </header>

                <main>
                    <Sidebar/>
                    <Content/>
                </main>
            </InstantSearch>
        );
    }
}

export default App;


//console.log('App.js is running!');
