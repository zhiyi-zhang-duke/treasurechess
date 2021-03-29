import React from 'react'
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

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      console.log("Graphql error ${message}")
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </>
  );
}

