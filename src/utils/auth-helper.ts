import { GET_REFRESH_TOKEN } from "../auth/gql";
import { apolloClient } from "./../ApolloClient";

interface TokenData {
  accessToken: string | null;
  refreshToken: string | null;
}

export const getToken = (): TokenData => {
  let tokenData: TokenData | undefined;
  const retrievedData = localStorage.getItem("tokenData");
  if (retrievedData) {
    tokenData = JSON.parse(retrievedData);
  }

  return {
    accessToken: tokenData?.accessToken ?? "",
    refreshToken: tokenData?.refreshToken ?? ""
  };
};

export const setTokens = (tokenData: TokenData): void => {
  localStorage.setItem("tokenData", JSON.stringify(tokenData));
};

export interface RefreshTokenResponse {
  authentication: {
    refreshToken: {
      accessToken: string;
      refreshToken: string;
      statusCode: number;
    };
  };
}

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
