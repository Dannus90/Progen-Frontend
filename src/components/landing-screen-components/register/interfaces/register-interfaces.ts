export interface RegisterFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface RegisterData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  registerUser: {
    statusCode: number;
    message: string;
  };
}
