import { useState } from "react";

type acceptedTypes = string | null;

interface AccountFormData {
  oldPassword?: acceptedTypes;
  newPassword?: acceptedTypes;
  newEmail?: acceptedTypes;
  password?: acceptedTypes;
}

interface ReturnObject {
  formData: AccountFormData;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type state = AccountFormData;

export const UseAccountForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
