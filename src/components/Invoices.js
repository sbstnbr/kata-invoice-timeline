import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Invoices = () => (
  <Query
    query={gql`
      {
        invoices {
          id
          status
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.invoices.map(({ id, status }) => (
        <div key={id}>
          <p>{`${id}: ${status}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Invoices;