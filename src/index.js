import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Redirect, BrowserRouter, Switch, browserHistory } from 'react-router-dom'



import Home from './components/home/Home.jsx'
import "./assets/scss/main.scss"








ReactDOM.render((

    <HashRouter history={browserHistory}>
        <Switch>
            <Route path="/home" component={Home} />
            
            <Redirect from="*" to="/home" />
        </Switch>
    </HashRouter>

),
    document.getElementById('app')
);