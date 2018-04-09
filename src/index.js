import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { render } from "react-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'https://kata-invoice-timeline-graphql-pixfvdqjyp.now.sh'
});

render(
  <ApolloProvider client={client}>
    <div>
      <App/>
    </div>
  </ApolloProvider>
, document.getElementById("root"));

registerServiceWorker();
