import React, {Component} from 'react'
import Header from './Header'
import Home from './Home'
import Resume from './Resume'
import Games from './Games'
import GameViewer from './GameViewer'
import Openings from './Openings'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
  HttpLink, 
  from 
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
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
        <Route path="/resume">
          <Resume />
        </Route>  
        <Route path="/contact">
          <Contact />
        </Route>
        </Switch>                                                       
      </Router>
    </>
  );
}

