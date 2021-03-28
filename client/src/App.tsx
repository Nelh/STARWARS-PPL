import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.scss';

import Home from './Pages/Home';
import People from './Pages/People';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/:page?" component={Home} />
        <Route path="/people/:id" component={People} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
