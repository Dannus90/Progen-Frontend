import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../../../styles/theme";
import { EditCertificateLicenseData } from "../interfaces/certificate-licenses-interfaces";
import CertificateLicenseModal from "./CertificateLicenseModal";

interface Props {
  isCreate: boolean;
  certificateLicense?: EditCertificateLicenseData;
  handleClose: () => void;
  open: boolean;
  header: string;
}

export type CertificateLicenseModalComponentClasses =
  | "certificateLicenseModalWrapperStyles"
  | "closeButtonWrapper"
  | "formStyle"
  | "submitButton"
  | "textAreaStyle"
  | "selectStyle"
  | "leaveEmpty"
  | "alertStyle"
  | "submitButtonWrapper"
  | "buttonsContainer";

const CertificateLicenseModalComponentWrapper: React.FC<Props> = ({
  isCreate,
  certificateLicense,
  handleClose,
  open,
  header
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const certificateLicenseModalComponentStyles = makeStyles({
    certificateLicenseModalWrapperStyles: {
      margin: "auto",
      minWidth: "400px"
    },
    closeButtonWrapper: {
      display: "flex",
      justifyContent: "flex-end"
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "space-between"
    },
    formStyle: {
      padding: "1rem"
    },
    submitButtonWrapper: {
      padding: "1.25rem 1rem"
    },
    submitButton: {
      width: "300px"
    },
    textAreaStyle: {
      minHeight: "300px",
      width: "100%",
      resize: "none",
      marginBottom: theme.customSpacings.s,
      border: "2px solid #cccccc",
      padding: "5px",
      fontFamily: "Tahoma, sans-serif",
      borderRadius: "3px"
    },
    selectStyle: {
      width: "150px"
    },
    leaveEmpty: {
      fontSize: "0.8rem",
      marginLeft: "0.3rem",
      marginTop: "0.2rem",
      color: theme.custom.palette.textVariantGrey.main
    },
    alertStyle: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 10px",
      margin: "0px 16px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.xs}`
    }
  });

  const styles = certificateLicenseModalComponentStyles();

  return (
    <CertificateLicenseModal
      header={header}
      open={open}
      handleClose={handleClose}
      isCreate={isCreate}
      certificateLicense={certificateLicense}
      styles={styles}
    />
  );
};

export default CertificateLicenseModalComponentWrapper;
