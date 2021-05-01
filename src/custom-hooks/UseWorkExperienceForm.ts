import { useState } from "react";
import { WorkExperienceInput } from "../components/home-screen-components/ui-components/cv-information-screen-components/work-experience/interfaces/work-experience-interfaces";

interface ReturnObject {
  formData: WorkExperienceInput;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

type state = WorkExperienceInput;

export const useWorkExperienceForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
