import { useState } from "react";

type acceptedTypes = string;

interface PresentationFormData {
  id?: acceptedTypes;
  presentationSv?: acceptedTypes;
  presentationEn?: acceptedTypes;
}

type state = PresentationFormData;

interface ReturnObject {
  formData: PresentationFormData;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const UsePresentationForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
