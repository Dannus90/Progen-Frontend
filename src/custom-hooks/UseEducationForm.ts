import { useState } from "react";
import { EducationInput } from "../components/home-screen-components/ui-components/cv-information-screen-components/education/interfaces/education-interfaces";

interface ReturnObject {
  formData: EducationInput;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

type state = EducationInput;

export const useEducationForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
