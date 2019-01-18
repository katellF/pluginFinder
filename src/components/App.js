 import React from 'react';
 import {Config} from '../config.js';
 import Content from './Content';
 import Sidebar from './SideBar';
 import {
     InstantSearch,
     SearchBox,
 } from 'react-instantsearch/dom';

 class App extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <InstantSearch
                apiKey= "fa83bb59b1a41155e0670b1869aa4df3"
                appId= "A2MUMFS8E7"
                indexName= "wp_plugins"
                >
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

export default App;
