import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.scss';

import People from './Pages/PeoplePage';
import PeopleDetails from './Pages/PeopleDetailsPage';

import logo from './logo.png';

function App() {
  const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container mt-5">
          <img src={logo} className="logo" alt="logo"/>
          <Route exact path="/:page?" component={People} />
          <Route path="/people/:id" component={PeopleDetails} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
