import React, {Component} from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Games from './Games'
import GameViewer from './GameViewer'
import Openings from './Openings'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import './App.css';

export default class App extends Component{


  render(){
    return (
      <>
        <Router>
          <Header />
          <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/gameviewer">
            <GameViewer />
          </Route>
          <Route path="/openings">
            <Openings />
          </Route>
          <Route path="/about">
            <About />
          </Route>  
          <Route path="/resume">
            <Resume />
          </Route>  
          <Route path="/contact">
            <Contact />
          </Route>
          </switch>                                                       
        </Router>
      </>
    );
  }
}
