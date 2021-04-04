import { useState } from "react";
import { RegisterFormData } from "../components/landing-screen-components/register/Register";

interface ReturnObject {
  formData: RegisterFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useForm = (initialState: RegisterFormData): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleInputChange };
};
