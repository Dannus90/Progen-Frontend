export interface TokenData {
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