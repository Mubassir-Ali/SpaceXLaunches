import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Launch} from './Components/Launch'
import Launches from './Components/Launches'


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="App">
        <h2>SpaceX Launches</h2>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launches} />
      </div>

    </Router>
      
    </ApolloProvider>
  );
}

export default App;
