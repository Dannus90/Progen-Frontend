export interface DeleteAccountResponse {
  authentication: {
    deleteAccount: {
      message: string;
      statusCode: number;
    };
  };
}

export interface DeleteAccountInput {
  password: string;
}