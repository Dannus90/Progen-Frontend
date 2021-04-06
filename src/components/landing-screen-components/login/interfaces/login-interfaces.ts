export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  loginUser: {
    statusCode: number;
    accessToken: string;
    refreshToken: string;
  };
}
