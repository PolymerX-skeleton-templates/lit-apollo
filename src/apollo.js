
import ApolloClient from 'apollo-boost';

// Create the apollo client
export const apolloClient = new ApolloClient({
  uri: 'https://fakerql.com/graphql',
  transportBatching: true
});
