import React from 'react';
import { gql, graphql, Query } from 'react-apollo';

// const myQuery = gql`{ hello }`;


class App extends React.Component {
  render() {
    return <HelloWorld/>
  }
}

// export default graphql(myQuery)(App)
export default App