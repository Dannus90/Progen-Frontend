import React, { useEffect, useMemo } from "react";
import { getToken, setTokens } from "../utils/auth-helper";
import jwt from "jwt-decode";
import { useNavigation } from "../custom-hooks/UseNavigation";
import { useMutation } from "@apollo/client";
import { GET_REFRESH_TOKEN } from "./gql";
import {
  RefreshTokenData,
  RefreshTokenDataResponse,
  RefreshTokenDataResponseBackend,
  TokenData
} from "./interfaces/auth-interaces";

interface Props {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<Props> = ({ children }): JSX.Element => {
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

  const [generateAccessToken, { error }] = useMutation<{
    authentication: RefreshTokenDataResponse;
    refreshTokenInput: RefreshTokenData;
  }>(GET_REFRESH_TOKEN, {
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
    if (!getToken()) {
      return navigateTo("/login");
    }

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
  return <>{children}</>;
};

export default AuthWrapper;
