import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../../styles/theme";
import CertificateLicense from "./CertificatesLicenses";

export type CertificateLicenseComponentClasses =
  | "certificateLicenseWrapperStyles"
  | "createCertificateLicenseButton"
  | "createCertificateLicenseButtonContainer"
  | "loaderContainer"
  | "alertStyle"
  | "refetchIcon";

const CertificateLicenseComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const certificateLicenseComponentStyles = makeStyles({
    certificateLicenseWrapperStyles: {
      margin: "auto"
    },
    createCertificateLicenseButton: {
      width: "50%",
      minWidth: "350px",
      marginBottom: theme.customSpacings.m
    },
    createCertificateLicenseButtonContainer: {
      display: "flex",
      justifyContent: "center"
    },
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "55vh"
    },
    alertStyle: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 10px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.s}`
    },
    refetchIcon: {
      cursor: "pointer",
      transition: "scale 0.2s ease-in-out, rotate 0.2s ease-in-out",
      "&:active": {
        transform: "scale(0.95) rotate(50deg)"
      }
    }
  });

  const styles = certificateLicenseComponentStyles();

  return <CertificateLicense styles={styles} />;
};

export default CertificateLicenseComponentWrapper;
