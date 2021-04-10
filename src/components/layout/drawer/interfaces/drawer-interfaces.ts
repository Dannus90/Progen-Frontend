export interface LogoutUserResponseBackend {
  authentication: {
    refreshToken: {
      message: string;
      statusCode: number;
    };
  };
}
