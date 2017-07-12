import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './views/Home';
import Driver from './views/Driver';
import User from './views/User';
import Schedule from './views/Schedule';

const App = () => {
    return (
        <Router hideNavBar>
            <Scene key="root">
                <Scene key="Home" component={Home} hideNavBar={true}/>
                <Scene key="Driver" component={Driver} />
                <Scene key="User" component={User} title="User"/>
                <Scene key="Schedule" component={Schedule} title="Schedule"/>
            </Scene>
        </Router>
    );
}

export default App;