import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./utils/auth-helper";

// More information regarding auth handling -> https://www.apollographql.com/docs/react/networking/authentication/#header

const { REACT_APP_PROGEN_GRAPHQL_URL } = process.env;

const httpLink = createHttpLink({
  uri: REACT_APP_PROGEN_GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const tokenData = getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: tokenData?.accessToken ? `Bearer ${tokenData.accessToken}` : ""
    }
  };
});

// Creating the apollo server.
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
