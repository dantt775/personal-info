import React from 'react'

import { BrowserRouter, Route, Switch, Redirect, browserHistory  } from 'react-router-dom'
import Home from '../home/Home.jsx'

const Routes = () => (
    <BrowserRouter history={browserHistory}> 
        <Switch>
            <Route path='/home' component={Home} />
            <Redirect from='*' to="/home" />
        </Switch>
    </BrowserRouter>
)
export default Routes;



