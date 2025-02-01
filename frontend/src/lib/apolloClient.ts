import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql", // Адрес твоего Strapi GraphQL API
  cache: new InMemoryCache(),
});

export default client;
