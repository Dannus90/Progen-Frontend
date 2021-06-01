import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../../styles/theme";
import { WorkExperienceData } from "../../interfaces/cv-print-component-interfaces";
import WorkExperienceCvComponent from "./WorkExperienceCvComponent";

export type WorkExperienceCvComponentClasses =
  | "workExperienceCvComponentWrapperStyles"
  | "company"
  | "role"
  | "employmentRate"
  | "cityCountry"
  | "date"
  | "description"
  | "headingIconWrapper"
  | "editIcon"
  | "versionHeader"
  | "workExperienceContainer";

interface Props {
  workExperienceData: WorkExperienceData;
  isSwedishCv: boolean;
}

const workExperienceComponentWrapperStyles: React.FC<Props> = ({
  workExperienceData,
  isSwedishCv
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const workExperienceComponentStyles = makeStyles({
    workExperienceCvComponentWrapperStyles: {
      marginBottom: theme.customSpacings.xs,
      paddingBottom: theme.customSpacings.xs,
      pageBreakInside: "avoid"
    },
    workExperienceContainer: {
      width: "100%"
    },
    versionHeader: {
      fontSize: "1.3em",
      fontWeight: "bold",
      marginBottom: "0.5rem"
    },
    company: {
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
    role: {
      color: theme.custom.palette.textVariantDark.main
    },
    employmentRate: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "0.90rem"
    },
    cityCountry: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem",
      marginBottom: "0.5rem"
    },
    date: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem"
    },
    description: {
      color: theme.custom.palette.textVariantGrey.dark,
      fontSize: "0.95rem",
      marginBottom: "1rem"
    }
  });

  const styles = workExperienceComponentStyles();

  return (
    <WorkExperienceCvComponent
      isSwedishCv={isSwedishCv}
      workExperienceData={workExperienceData}
      styles={styles}
    />
  );
};

export default workExperienceComponentWrapperStyles;
