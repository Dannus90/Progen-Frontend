export interface ResetPasswordWithTokenData {
  password: string;
}

export interface ResetPasswordWithTokenDataResponse {
  resetPasswordResetByToken: {
    statusCode: number;
    message: string;
  };
}
