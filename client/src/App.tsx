import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'http://localost:4000',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div></div>
    </ApolloProvider>
  );
}

export default App;
