import { useState } from "react";
import { CertificateLicenseInput } from "../components/home-screen-components/ui-components/cv-information-screen-components/certificates-licenses/interfaces/certificate-licenses-interfaces";

interface ReturnObject {
  formData: CertificateLicenseInput;
  setFormData: (value: state) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

type state = CertificateLicenseInput;

export const useCertificateLicenseForm = (initialState: state): ReturnObject => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, setFormData, handleInputChange };
};
