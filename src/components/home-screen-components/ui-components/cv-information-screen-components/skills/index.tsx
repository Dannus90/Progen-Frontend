import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import Skills from "./Skills";

export interface SkillsComponentStyles extends Theme {
  skillsWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type SkillsComponentClasses = "skillsWrapperStyles";

const SkillsComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const skillsComponentStyles = makeStyles({
    skillsWrapperStyles: {
      backgroundColor: "red"
    }
  });

  const styles = skillsComponentStyles();

  return <Skills styles={styles} />;
};

export default SkillsComponentWrapper;
