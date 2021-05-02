import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import EducationComponent from "./Education";

export interface EducationComponentStyles extends Theme {
  educationWrapperStyles: CreateCSSProperties | CSSProperties;
  createEducationButton: CreateCSSProperties | CSSProperties;
  createEducationButtonContainer: CreateCSSProperties | CSSProperties;
}

export type EducationComponentClasses = "educationWrapperStyles" | "createEducationButton" | "createEducationButtonContainer";

const EducationComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const educationComponentStyles = makeStyles({
    educationWrapperStyles: {
      margin: "auto"
    },
    createEducationButton: {
      width: "50%",
      minWidth: "350px",
      marginBottom: theme.customSpacings.m
    },
    createEducationButtonContainer: {
      display: "flex",
      justifyContent: "center"
    }
  });

  const styles = educationComponentStyles();

  return <EducationComponent styles={styles} />;
};

export default EducationComponentWrapper;
