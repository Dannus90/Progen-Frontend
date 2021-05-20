export interface RequestPasswordResetByEmailData {
  email: string;
}

export interface RequestPasswordResetByEmailDataResponse {
  requestPasswordResetByEmail: {
    statusCode: number;
    message: string;
  };
}
