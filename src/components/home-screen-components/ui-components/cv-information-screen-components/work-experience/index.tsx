import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import WorkExperience from "./WorkExperience";

export interface SWorkExperienceComponentStyles extends Theme {
  workExperienceWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type WorkExperienceComponentClasses = "workExperienceWrapperStyles";

const WorkExperienceComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const workExperienceComponentStyles = makeStyles({
    workExperienceWrapperStyles: {
      backgroundColor: "red"
    }
  });

  const styles = workExperienceComponentStyles();

  return <WorkExperience styles={styles} />;
};

export default WorkExperienceComponentWrapper;
