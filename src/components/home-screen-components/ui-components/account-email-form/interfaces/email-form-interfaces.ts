export interface ChangeEmailInput {
  password: string;
  newEmail: string;
}

export interface ChangeEmailResponse {
  statusCode: number;
  message: string;
}
