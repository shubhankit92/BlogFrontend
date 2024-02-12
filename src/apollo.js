// src/apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://glacial-plateau-40406-f9b0347043d7.herokuapp.com/graphql',  // Adjust the URI based on your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default client;
