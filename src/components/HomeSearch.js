 import React from 'react';
 import Config from '../config.js';
 import Content from './Content';
 import Sidebar from './SideBar';
 import {
     InstantSearch,
     SearchBox,
 } from 'react-instantsearch/dom';

 class HomeSearch extends React.Component {
    render() {

        return (
            <InstantSearch
                apiKey= {Config.apiKey}
                appId= {Config.appId}
                indexName={Config.index}>

                <header className="header marginBottom50 marginTop50 container">
                    <SearchBox translations={{placeholder: 'Search for Plugins'}}/>
                </header>


                <main>
                    <div className="main">
                    <Sidebar title="Languages"/>
                    <Content/>
                    </div>
                </main>
            </InstantSearch>
        );
    }
}

export default HomeSearch;
