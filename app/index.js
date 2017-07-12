import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './views/Home';

const App = () => {
    return (
        <Router hideNavBar>
            <Scene key="root">
                <Scene key="Home" component={Home} hideNavBar={true} initial={false} />
            </Scene>
        </Router>
    );
}

export default App;