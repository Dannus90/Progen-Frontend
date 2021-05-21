export interface ResetPasswordWithTokenData {
  password: string;
}

export interface ResetPasswordWithTokenDataResponse {
  resetPasswordByToken: {
    statusCode: number;
    message: string;
  };
}
