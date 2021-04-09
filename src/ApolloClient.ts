import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  fromPromise,
  InMemoryCache,
  useMutation
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GET_REFRESH_TOKEN } from "./auth/gql";
import {
  RefreshTokenData,
  RefreshTokenDataResponse,
  RefreshTokenDataResponseBackend
} from "./auth/interfaces/auth-interaces";
import { useNavigation } from "./custom-hooks/UseNavigation";
import { getToken, setTokens } from "./utils/auth-helper";

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

const [generateAccessToken] = useMutation<{
  authentication: RefreshTokenDataResponse;
  refreshTokenInput: RefreshTokenData;
}>(GET_REFRESH_TOKEN, {
  errorPolicy: "all"
});

const getAccessToken = async (tokenData: RefreshTokenData) => {
  await generateAccessToken({
    variables: {
      refreshTokenInput: {
        accessToken: tokenData.accessToken,
        refreshToken: tokenData.refreshToken
      }
    }
  });
};

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      const tokenData = getToken();
      switch (err?.extensions?.exception.statusCode) {
        case 401:
          if (tokenData.refreshToken && tokenData.accessToken) {
            return fromPromise(
              getAccessToken({
                accessToken: tokenData.accessToken,
                refreshToken: tokenData.refreshToken
              }).catch((error) => {
                console.log(error);
                window.location.replace("/login");
                return;
              })
            )
              .filter((value) => Boolean(value))
              .flatMap((accessToken) => {
                console.log("HERE!!!!");
                const oldHeaders = operation.getContext().headers;
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `Bearer ${accessToken}`
                  }
                });

                // retry the request, returning the new observable
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
  cache: new InMemoryCache()
});
