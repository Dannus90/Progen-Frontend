import { useState } from "react";

type acceptedTypes = string;

interface OtherInformationFormData {
  id?: acceptedTypes;
  drivingLicenseSv?: acceptedTypes;
  drivingLicenseEn?: acceptedTypes;
}

type state = OtherInformationFormData;

interface ReturnObject {
  formData: OtherInformationFormData;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const UseOtherInformationForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
