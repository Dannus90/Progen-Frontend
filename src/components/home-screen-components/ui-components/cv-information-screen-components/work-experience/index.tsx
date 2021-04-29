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
}

export type WorkExperienceComponentClasses =
  | "workExperienceWrapperStyles"
  | "createWorkExperienceButton"
  | "createWorkExperienceButtonContainer";

const WorkExperienceComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const workExperienceComponentStyles = makeStyles({
    workExperienceWrapperStyles: {
      margin: "auto"
    },
    createWorkExperienceButton: {
      width: "50%",
      minWidth: "350px"
    },
    createWorkExperienceButtonContainer: {
      display: "flex",
      justifyContent: "center"
    }
  });

  const styles = workExperienceComponentStyles();

  return <WorkExperience styles={styles} />;
};

export default WorkExperienceComponentWrapper;
