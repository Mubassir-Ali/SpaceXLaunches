import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import {Launch} from './Components/Launch'
import Launches from './Components/Launches'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>SpaceX Launches</h2>
        <Launch/>
      </div>
    </ApolloProvider>
  );
}

export default App;
