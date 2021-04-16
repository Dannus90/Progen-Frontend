import { useState } from "react";
import { ProfileFormDataState } from "../components/home-screen-components/ui-components/profile-form/interfaces/profile-form-interfaces";
import { LoginData } from "../components/landing-screen-components/login/interfaces/login-interfaces";
import { RegisterFormData } from "../components/landing-screen-components/register/interfaces/register-interfaces";

interface RegisterLoginProfileData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  countrySv?: string;
  citySv?: string;
  countryEn?: string;
  cityEn?: string;
}

interface ReturnObject {
  formData: RegisterLoginProfileData;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type state = RegisterFormData | LoginData | ProfileFormDataState;

export const useForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
