import { useState } from "react";

type acceptedTypes = string;

interface LanguagesFormData {
  languageId?: acceptedTypes;
  languageSv: acceptedTypes;
  languageEn: acceptedTypes;
}

type state = LanguagesFormData;

interface ReturnObject {
  formData: LanguagesFormData;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const UseLanguagesForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
