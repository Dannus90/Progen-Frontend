import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  const { navigateTo } = useNavigation();
  const respondToGraphqlResponse = (responseData: RefreshTokenDataResponseBackend): void => {
    if (!responseData) {
      return navigateTo("/login");
    }

    setTokens({
      refreshToken: responseData.authentication.refreshToken.refreshToken,
      accessToken: responseData.authentication.refreshToken.accessToken
    });
  };

  const [generateAccessToken, { error, data }] = useMutation<{
    authentication: RefreshTokenDataResponse;
    refreshTokenInput: RefreshTokenData;
  }>(GET_REFRESH_TOKEN, {
    errorPolicy: "all",
    onCompleted: (data) => respondToGraphqlResponse(data)
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

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }

  if (
    graphQLErrors?.some((ge) => {
      return ge.extensions?.exception.statusCode === 401;
    })
  ) {
    const tokenData = getToken();
    if (tokenData.accessToken && tokenData.refreshToken) {
      getAccessToken({ refreshToken: tokenData.refreshToken, accessToken: tokenData.accessToken });
    } else {
      navigateTo("/login");
    }
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
