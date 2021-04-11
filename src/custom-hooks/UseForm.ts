import { useState } from "react";
import { LoginData } from "../components/landing-screen-components/login/interfaces/login-interfaces";
import { RegisterFormData } from "../components/landing-screen-components/register/interfaces/register-interfaces";

interface RegisterLoginData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

interface ReturnObject {
  formData: RegisterLoginData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useForm = (initialState: RegisterFormData | LoginData): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleInputChange };
};
