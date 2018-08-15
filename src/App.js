import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

import routes from './routes';

class App extends Component {
    render() {
        return (
            // HashRouter is necessary to use routing in your app
            <HashRouter>
                {routes}
            </HashRouter>
        );
    }
}

export default App;
