export interface TokenData {
  aud: string;
  email: string;
  exp: number;
  iss: string;
  sub: string;
}

export interface RefreshTokenData {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshTokenDataResponse {
  refreshToken: {
    accessToken: string;
    refreshToken: string;
    statusCode: number;
  };
}

export interface RefreshTokenDataResponseBackend {
  authentication: {
    refreshToken: {
      accessToken: string;
      refreshToken: string;
      statusCode: number;
    };
  };
}
