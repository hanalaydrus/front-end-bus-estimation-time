import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './views/Home';
import Driver from './views/Driver';

const App = () => {
    return (
        <Router hideNavBar>
            <Scene key="root">
                <Scene key="Home" component={Home} hideNavBar={true}/>
                <Scene key="Driver" component={Driver} />
            </Scene>
        </Router>
    );
}

export default App;