import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../../styles/theme";
import { CertificateData } from "../../interfaces/cv-print-component-interfaces";
import CertificateCvComponent from "./CertificateCvComponent";

export type CertificateCvComponentClasses =
  | "certificateCvComponentWrapperStyles"
  | "certificate"
  | "date"
  | "identificationId"
  | "headingWrapper"
  | "referenceAddress"
  | "certificateContainer"
  | "certificate"
  | "organisation"
  | "certificateHeader";

interface Props {
  certificateData: CertificateData;
  isSwedishCv: boolean;
  isFirstCvComponent: boolean;
}

const CertificateCvComponentWrapper: React.FC<Props> = ({
  certificateData,
  isSwedishCv,
  isFirstCvComponent
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const certificateComponentStyles = makeStyles({
    certificateCvComponentWrapperStyles: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: theme.customSpacings.xs,
      paddingBottom: theme.customSpacings.xs,
      pageBreakInside: "avoid"
    },
    certificateContainer: {
      width: "100%"
    },
    certificate: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      marginBottom: "0.25rem"
    },
    headingWrapper: {
      display: "flex",
      justifyContent: "space-between"
    },
    organisation: {
      color: theme.custom.palette.textVariantDark.main
    },
    referenceAddress: {
      color: theme.custom.palette.textVariantDark.main
    },
    date: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "0.95rem",
      marginBottom: "0.25rem"
    },
    identificationId: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem"
    },
    certificateHeader: {
      fontSize: "1.6rem",
      marginBottom: theme.customSpacings.xxs,
      display: "flex",
      alignItems: "center"
    }
  });

  const styles = certificateComponentStyles();

  return (
    <CertificateCvComponent
      isSwedishCv={isSwedishCv}
      certificateData={certificateData}
      styles={styles}
      isFirstCvComponent={isFirstCvComponent}
    />
  );
};

export default CertificateCvComponentWrapper;
