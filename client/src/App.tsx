import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.scss';

function App() {
  const client = new ApolloClient({
    uri: 'http://localost:4000',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </ApolloProvider>
  );
}

export default App;
