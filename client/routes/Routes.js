import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../components/Home';
import AboutPage from '../components/About';

const Routes = () => 
    <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
    </Switch>
;

export default Routes;