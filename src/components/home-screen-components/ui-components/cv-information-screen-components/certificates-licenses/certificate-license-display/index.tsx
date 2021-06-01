import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../../../styles/theme";
import { GetCertificateResponse } from "../interfaces/certificate-licenses-interfaces";
import CertificateLicenseDisplayComponent from "./CertificateLicenseDisplay";

export type CertificateLicenseDisplayComponentClasses =
  | "certificateLicenseDisplayWrapperStyles"
  | "certificateName"
  | "information"
  | "date"
  | "headingIconWrapper"
  | "editIcon"
  | "versionHeader"
  | "certificateLicenseContainer";

interface Props {
  certificateLicenseData: GetCertificateResponse;
}

const CertificateLicenseDisplayComponentWrapper: React.FC<Props> = ({
  certificateLicenseData
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const certificateLicenseComponentStyles = makeStyles({
    certificateLicenseDisplayWrapperStyles: {
      display: "flex",
      flexDirection: "row",
      borderBottom: theme.custom.borderColors.subtleGreyMain,
      marginBottom: theme.customSpacings.m,
      paddingBottom: theme.customSpacings.xs
    },
    certificateLicenseContainer: {
      width: "50%",
      margin: "0.5rem"
    },
    versionHeader: {
      fontSize: "1.3em",
      fontWeight: "bold",
      marginBottom: "0.5rem"
    },
    certificateName: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      marginBottom: "0.25rem"
    },
    headingIconWrapper: {
      display: "flex",
      justifyContent: "space-between"
    },
    editIcon: {
      cursor: "pointer",
      borderRadius: "100px",
      width: "25px",
      height: "25px",
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(238, 238, 238, 1)"
      },
      "&:active": {
        transform: "scale(0.975)"
      }
    },
    information: {
      color: theme.custom.palette.textVariantDark.medium
    },
    date: {
      color: theme.custom.palette.textVariantDark.light,
      fontSize: "0.85rem",
      marginTop: theme.customSpacings.s
    }
  });

  const styles = certificateLicenseComponentStyles();

  return (
    <CertificateLicenseDisplayComponent
      certificateLicenseData={certificateLicenseData}
      styles={styles}
    />
  );
};

export default CertificateLicenseDisplayComponentWrapper;
