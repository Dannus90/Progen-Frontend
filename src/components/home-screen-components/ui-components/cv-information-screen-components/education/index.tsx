import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import EducationComponent from "./Education";

export interface EducationComponentStyles extends Theme {
  educationWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type EducationComponentClasses = "educationWrapperStyles";

const EducationComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const educationComponentStyles = makeStyles({
    educationWrapperStyles: {
      backgroundColor: "red"
    }
  });

  const styles = educationComponentStyles();

  return <EducationComponent styles={styles} />;
};

export default EducationComponentWrapper;
