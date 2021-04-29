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

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function App() {

  
client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/song">Songs</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/home">
              <LandingPage />
            </Route>
            <Route path="/song">
              <SongPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
