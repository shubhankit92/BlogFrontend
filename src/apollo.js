// src/apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',  // Adjust the URI based on your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default client;
