import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Invoices from './components/Invoices';

const myQuery = gql `{ hello }`;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.hello}</h1>
        <Invoices/>
      </div>
    )
  }
}

export default graphql(myQuery)(App);