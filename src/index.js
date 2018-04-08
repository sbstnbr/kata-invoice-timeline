import React from 'react';
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { render } from "react-dom";
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:3001'
});

const HelloWorld = () => (
  <Query
    query={gql`
      { hello }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <div> {data.hello} </div>
    }}
  </Query>
);

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <HelloWorld/>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));

registerServiceWorker();
