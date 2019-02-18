import React from 'react';
import Hit from './Hit.js';
import {
    Stats,
    SortBy,
    Pagination,
    Hits
} from 'react-instantsearch/dom';

const Content = () =>

    <div className="col">
        <div className="content">
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
        <div className="pagination content__pagination">
            <Pagination showLast/>
        </div>

    </div>

export default Content;