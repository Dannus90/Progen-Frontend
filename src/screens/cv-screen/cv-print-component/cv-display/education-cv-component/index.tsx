import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../../styles/theme";
import { EducationData } from "../../interfaces/cv-print-component-interfaces";
import EducationCvComponent from "./EducationCvComponent";

export type EducationCvComponentClasses =
  | "educationCvComponentWrapperStyles"
  | "education"
  | "exam"
  | "grade"
  | "date"
  | "description"
  | "headingWrapper"
  | "versionHeader"
  | "location"
  | "subject"
  | "educationContainer"
  | "educationHeader";

interface Props {
  educationData: EducationData;
  isSwedishCv: boolean;
  isFirstCvComponent: boolean;
}

const EducationCvComponentWrapper: React.FC<Props> = ({
  educationData,
  isSwedishCv,
  isFirstCvComponent
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const educationComponentStyles = makeStyles({
    educationCvComponentWrapperStyles: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: theme.customSpacings.xs,
      paddingBottom: theme.customSpacings.xs,
      pageBreakInside: "avoid"
    },
    educationContainer: {
      width: "100%"
    },
    versionHeader: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      marginBottom: "0.5rem"
    },
    education: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      marginBottom: "0.25rem"
    },
    headingWrapper: {
      display: "flex",
      justifyContent: "space-between"
    },
    exam: {
      color: theme.custom.palette.textVariantDark.main
    },
    grade: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "0.90rem"
    },
    location: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem",
      marginBottom: "0.5rem"
    },
    subject: {
      color: theme.custom.palette.textVariantDark.main
    },
    date: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem"
    },
    description: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "0.95rem",
      marginBottom: "1rem"
    },
    educationHeader: {
      fontSize: "1.6rem",
      marginBottom: theme.customSpacings.xxs,
      display: "flex",
      alignItems: "center"
    }
  });

  const styles = educationComponentStyles();

  return (
    <EducationCvComponent
      isFirstCvComponent={isFirstCvComponent}
      educationData={educationData}
      isSwedishCv={isSwedishCv}
      styles={styles}
    />
  );
};

export default EducationCvComponentWrapper;
