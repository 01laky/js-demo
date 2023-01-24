import * as React from 'react';

import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';

import GraphQlContextProvider from '../Services/GraphQlService';
import RoutingService from '../Services/RoutingService';

import './styles.scss';

const App = () => {
  return (
    <GraphQlContextProvider>
      <div className="pokemon-app">
        <RoutingService />
      </div>
    </GraphQlContextProvider>
  );
}

export default App;
