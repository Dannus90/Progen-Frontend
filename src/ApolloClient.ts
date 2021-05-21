import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getToken, setTokens } from "./utils/auth-helper";
import fetch from "cross-fetch";
import { invokeAccessToken } from "./api/httpClient";
import { getNewToken } from "./utils/apollo-auth-helper";

// More information regarding auth handling -> https://www.apollographql.com/docs/react/networking/authentication/#header
const { REACT_APP_PROGEN_GRAPHQL_URL } = process.env;

const httpLink = createHttpLink({
  uri: REACT_APP_PROGEN_GRAPHQL_URL,
  fetch
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const tokenData = getToken();
  // Return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: tokenData?.accessToken ? `Bearer ${tokenData.accessToken}` : ""
    }
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      const tokenData = getToken();
      if (err.path?.includes("loginUser")) {
        return;
      }

      switch (err?.extensions?.exception.statusCode) {
        case 401:
          if (!tokenData) return window.location.replace("/login");
          if (tokenData.refreshToken && tokenData.accessToken) {
            getNewToken().then((res) => {
              console.log(res);
              if (res.data === null || res.errors || err.path?.includes("logoutUser")) {
                return window.location.replace("/login");
              }

              const { accessToken, refreshToken } = res.data?.authentication.refreshToken;

              setTokens({ accessToken, refreshToken });
              invokeAccessToken();

              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `Bearer ${accessToken}`
                }
              });

              return forward(operation);
            });
          }
      }
    }
  }

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);

  // To retry on network errors, we recommend the RetryLink
  // instead of the onError link. This just logs the error.
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// Creating the apollo server.
export const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: "all"
    },
    query: {
      errorPolicy: "all"
    },
    mutate: {
      errorPolicy: "all"
    }
  }
});
