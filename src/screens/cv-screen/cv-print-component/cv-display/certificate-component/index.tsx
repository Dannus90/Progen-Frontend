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
  | "organisation";

interface Props {
  certificateData: CertificateData;
  isSwedishCv: boolean;
}

const CertificateCvComponentWrapper: React.FC<Props> = ({
  certificateData,
  isSwedishCv
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const certificateComponentStyles = makeStyles({
    certificateCvComponentWrapperStyles: {
      display: "flex",
      flexDirection: "row",
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
    }
  });

  const styles = certificateComponentStyles();

  return (
    <CertificateCvComponent
      isSwedishCv={isSwedishCv}
      certificateData={certificateData}
      styles={styles}
    />
  );
};

export default CertificateCvComponentWrapper;
