export interface ChangePasswordInput {
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  statusCode: number;
  message: string;
}
