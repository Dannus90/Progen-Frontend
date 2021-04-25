import { useState } from "react";

type acceptedTypes = string | null;

interface PresentationFormData {
  id?: acceptedTypes;
  presentationSv?: acceptedTypes;
  presentationEn?: acceptedTypes;
}

type state = PresentationFormData;

interface ReturnObject {
  formData: PresentationFormData;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UsePresentationForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
