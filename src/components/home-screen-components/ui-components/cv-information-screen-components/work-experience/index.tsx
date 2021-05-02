import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import WorkExperience from "./WorkExperience";

export interface SWorkExperienceComponentStyles extends Theme {
  workExperienceWrapperStyles: CreateCSSProperties | CSSProperties;
  createWorkExperienceButton: CreateCSSProperties | CSSProperties;
  createWorkExperienceButtonContainer: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
  refetchIcon: CreateCSSProperties | CSSProperties;
}

export type WorkExperienceComponentClasses =
  | "workExperienceWrapperStyles"
  | "createWorkExperienceButton"
  | "createWorkExperienceButtonContainer"
  | "loaderContainer"
  | "alertStyle"
  | "refetchIcon";

const WorkExperienceComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const workExperienceComponentStyles = makeStyles({
    workExperienceWrapperStyles: {
      margin: "auto"
    },
    createWorkExperienceButton: {
      width: "50%",
      minWidth: "350px",
      marginBottom: theme.customSpacings.m
    },
    createWorkExperienceButtonContainer: {
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

  const styles = workExperienceComponentStyles();

  return <WorkExperience styles={styles} />;
};

export default WorkExperienceComponentWrapper;
