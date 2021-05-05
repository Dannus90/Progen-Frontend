import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import CertificatesLicensesComponent from "./CertificatesLicenses";

export interface CertificatesLicensesComponentStyles extends Theme {
  certificatesLicensesWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type CertificatesLicensesComponentClasses = "certificatesLicensesWrapperStyles";

const CertificatesLicensesComponentWrapper: React.FC = (): JSX.Element => {
  const certificatesLicensesComponentStyles = makeStyles({
    certificatesLicensesWrapperStyles: {
      backgroundColor: "red"
    }
  });

  const styles = certificatesLicensesComponentStyles();

  return <CertificatesLicensesComponent styles={styles} />;
};

export default CertificatesLicensesComponentWrapper;
