import * as React from 'react';
import { get } from 'lodash-es';

import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';

export const GraphQLContext = React.createContext({});

const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log('GRAPHQL ERRORS => ', graphQLErrors);
      }
      if (networkError) {
        console.log('NETWORK ERROR => ', networkError);
      }
    }),
    new HttpLink({
      uri: 'http://192.168.0.102:4000/graphql',
      credentials: 'same-origin',
    }),
  ]);
  
  const cache = new InMemoryCache({});
  
  const client = new ApolloClient({
    link,
    cache,
  });

const GraphQlContextProvider = (props) => {
    return (
        <GraphQLContext.Provider
            value={{}}
        >
            <ApolloProvider client={client}>
                {get(props, 'children')}
            </ApolloProvider>
        </GraphQLContext.Provider>
    );
};

export default GraphQlContextProvider;

