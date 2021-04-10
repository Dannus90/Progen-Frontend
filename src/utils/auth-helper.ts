import { GET_REFRESH_TOKEN } from "../auth/gql";
import { apolloClient } from "./../ApolloClient";
const { REACT_APP_PROGEN_API_URL } = process.env;
const API = `${REACT_APP_PROGEN_API_URL}/api`;
const V1 = `${API}/v1`;
import httpClient from "./api/httpClient";

// Endpoints
const getRefreshTokenEndpoint = `${V1}/user/auth/refresh`;

interface TokenData {
  accessToken: string | null;
  refreshToken: string | null;
}

type PostData = Record<string, string | null>;

export const getToken = (): TokenData => {
  let tokenData;
  const retrievedData = localStorage.getItem("tokenData");
  if (retrievedData) {
    tokenData = JSON.parse(retrievedData);
  }

  return tokenData;
};

export const setTokens = (tokenData: TokenData): void => {
  localStorage.setItem("tokenData", JSON.stringify(tokenData));
};

export const getRefreshToken = (tokenData: PostData) => {
  httpClient.post(`${getRefreshTokenEndpoint}`, tokenData);
};

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
