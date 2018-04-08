import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { render } from "react-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:3001'
});

render(
  <ApolloProvider client={client}>
    <div>
      <App/>
    </div>
  </ApolloProvider>
, document.getElementById("root"));

registerServiceWorker();
