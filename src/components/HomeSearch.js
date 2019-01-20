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

                <header className="header marginBottom50 marginTop50">
                    <SearchBox translations={{placeholder: 'Search for Plugins'}}/>
                </header>


                <main className="flex">
                    <Sidebar title="Languages"/>
                    <Content/>
                </main>
            </InstantSearch>
        );
    }
}

export default HomeSearch;
