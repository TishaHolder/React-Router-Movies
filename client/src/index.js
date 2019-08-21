import React from 'react';
import ReactDOM from 'react-dom';

//{BrowserRouter as Router} this is a naming convention where Router is used as an alias for BrowserRouter
import {BrowserRouter as Router} from "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(

    //wrap the App in the Router component
    <Router>
        <App />
    </Router>,   
    document.getElementById('root'));

    /*this is where our application gets kicked off and is hooked up to the router*/