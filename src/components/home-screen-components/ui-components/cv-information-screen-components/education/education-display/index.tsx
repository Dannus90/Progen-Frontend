import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../../styles/theme";
import { GetEducationResponse } from "../interfaces/education-interfaces";
import EducationDisplayComponent from "./EducationDisplay";

export interface EducationDisplayComponentStyles extends Theme {
  educationDisplayWrapperStyles: CreateCSSProperties | CSSProperties;
  education: CreateCSSProperties | CSSProperties;
  exam: CreateCSSProperties | CSSProperties;
  grade: CreateCSSProperties | CSSProperties;
  city: CreateCSSProperties | CSSProperties;
  date: CreateCSSProperties | CSSProperties;
  description: CreateCSSProperties | CSSProperties;
  headingIconWrapper: CreateCSSProperties | CSSProperties;
  editIcon: CreateCSSProperties | CSSProperties;
  versionHeader: CreateCSSProperties | CSSProperties;
}

export type EducationDisplayComponentClasses =
  | "educationDisplayWrapperStyles"
  | "education"
  | "exam"
  | "grade"
  | "city"
  | "date"
  | "description"
  | "headingIconWrapper"
  | "editIcon"
  | "versionHeader";

interface Props {
  educationData: GetEducationResponse;
}

const EducationDisplayComponentWrapper: React.FC<Props> = ({ educationData }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const educationComponentStyles = makeStyles({
    educationDisplayWrapperStyles: {
      display: "flex",
      flexDirection: "row",
      borderBottom: theme.custom.borderColors.subtleGreyMain,
      marginBottom: theme.customSpacings.m,
      paddingBottom: theme.customSpacings.xs
    },
    versionHeader: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      marginBottom: "0.5rem"
    },
    education: {
      fontWeight: "bold",
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
    exam: {
      color: theme.custom.palette.textVariantDark.main
    },
    grade: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "0.90rem"
    },
    city: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem",
      marginBottom: "0.5rem"
    },
    date: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem"
    },
    description: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "0.95rem",
      marginBottom: "1rem"
    }
  });

  const styles = educationComponentStyles();

  return <EducationDisplayComponent educationData={educationData} styles={styles} />;
};

export default EducationDisplayComponentWrapper;
