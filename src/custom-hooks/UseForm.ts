import { useState } from "react";
import { ProfileFormDataState } from "../components/home-screen-components/ui-components/profile-form/interfaces/profile-form-interfaces";
import { LoginData } from "../components/landing-screen-components/login/interfaces/login-interfaces";
import { RegisterFormData } from "../components/landing-screen-components/register/interfaces/register-interfaces";
import { UserDataState } from "../redux/reducers/user-data/userDataReducer";

type acceptedTypes = string | null;

interface RegisterLoginProfileData {
  firstName?: acceptedTypes;
  lastName?: acceptedTypes;
  email?: acceptedTypes;
  password?: acceptedTypes;
  phoneNumber?: acceptedTypes;
  countrySv?: acceptedTypes;
  citySv?: acceptedTypes;
  countryEn?: acceptedTypes;
  cityEn?: acceptedTypes;
  zipCode?: acceptedTypes;
  workTitleSv?: acceptedTypes;
  workTitleEn?: acceptedTypes;
}

interface ReturnObject {
  formData: RegisterLoginProfileData;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type state = RegisterFormData | LoginData | ProfileFormDataState | UserDataState;

export const useForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
