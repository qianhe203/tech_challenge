import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SongPage from "./components/SongPage"
import { gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import styled from 'styled-components';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const NavItem = styled.div`
text-align: center;
font-weight: bold;
width: 150px;
height: 30px;
background-color: #a4a5a8;
color: black !important
`;

 

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <nav style={{display:"inline-flex"}}>
              <NavItem>
              <Link to="/home" style={{color:"black"}}>Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/song" style={{color:"black"}}>Songs</Link>
              </NavItem>
          </nav>

          <Switch>
            <Route path="/home">
              <LandingPage />
            </Route>
            <Route path="/song">
              <SongPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
