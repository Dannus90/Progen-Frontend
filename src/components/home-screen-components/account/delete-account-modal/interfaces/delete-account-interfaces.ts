export interface DeleteAccountResponse {
  deleteAccount: {
    message: string;
    statusCode: number;
  };
}

export interface DeleteAccountInput {
  password: string;
}
