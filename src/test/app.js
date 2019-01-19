import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//import 'normalize.css/normalize.css';
//import './styles/styles.scss';

const HomePage = () => (
    <div>
        This is from my home
    </div>
);


const routes = (
    <BrowserRouter>
        <div>
            <Route path="/home" component={HomePage} exact={true} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
