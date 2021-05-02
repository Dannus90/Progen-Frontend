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
  alertStyle: CreateCSSProperties | CSSProperties;
  refetchIcon: CreateCSSProperties | CSSProperties;
  loaderContainer: CreateCSSProperties | CSSProperties;
}

export type EducationComponentClasses =
  | "educationWrapperStyles"
  | "createEducationButton"
  | "createEducationButtonContainer"
  | "alertStyle"
  | "refetchIcon"
  | "loaderContainer";

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
    },
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "55vh"
    }
  });

  const styles = educationComponentStyles();

  return <EducationComponent styles={styles} />;
};

export default EducationComponentWrapper;
