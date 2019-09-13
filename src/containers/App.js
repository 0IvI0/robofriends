import React, { Component } from 'react';
import './App.css';
import HomePage from '../components/HomePage';
import Robots from '../components/Robots';
import Kittens from "../components/Kittens";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/robofriends" component={Robots}/>
                    <Route path="/robokittens" component={Kittens}/>
                </Switch>
            </Router>
            </div>
        );
    }
}

export default App;
