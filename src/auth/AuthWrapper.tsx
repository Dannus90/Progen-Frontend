import React, { useEffect, useMemo } from "react";
import { getToken, setTokens } from "../utils/auth-helper";
import jwt from "jwt-decode";
import { useNavigation } from "../custom-hooks/UseNavigation";
import { useMutation } from "@apollo/client";
import { GET_REFRESH_TOKEN } from "./gql";
import { onError } from "@apollo/client/link/error";

interface Props {
  children: React.ReactNode;
}

interface TokenData {
  aud: string;
  email: string;
  exp: number;
  iss: string;
  sub: string;
}

interface RefreshTokenData {
  accessToken: string;
  refreshToken: string;
}

interface RefreshTokenDataResponse {
  refreshToken: {
    accessToken: string;
    refreshToken: string;
    statusCode: number;
  };
}

interface RefreshTokenDataResponseBackend {
  authentication: {
    refreshToken: {
      accessToken: string;
      refreshToken: string;
      statusCode: number;
    };
  };
}

const AuthWrapper: React.FC<Props> = ({ children }): JSX.Element => {
  const { navigateTo } = useNavigation();
  const respondToGraphqlResponse = (responseData: RefreshTokenDataResponseBackend): void => {
    if (!responseData) {
      return;
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

  useMemo((): void => {
    if (error) {
      navigateTo("/login");
    }
  }, [error]);

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

  useEffect(() => {
    const { accessToken, refreshToken } = getToken();
    if (accessToken && refreshToken) {
      const { exp } = jwt<TokenData>(accessToken);
      const currentTime = new Date().getTime() / 1000;

      if (currentTime < exp) {
        getAccessToken({ accessToken, refreshToken });
      }
    } else {
      return navigateTo("/login");
    }
  }, []);

  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  return <>{children}</>;
};

export default AuthWrapper;
