import { apolloClient } from "../ApolloClient";
import { GET_REFRESH_TOKEN } from "../auth/gql";
import { getToken } from "./auth-helper";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getNewToken = () => {
  const { accessToken, refreshToken } = getToken();
  return apolloClient.mutate({
    mutation: GET_REFRESH_TOKEN,
    variables: {
      refreshTokenInput: {
        accessToken: accessToken,
        refreshToken: refreshToken
      }
    }
  });
};
