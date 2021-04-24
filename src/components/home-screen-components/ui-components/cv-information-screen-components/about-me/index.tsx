import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import AboutMeComponent from "./AboutMe";

export interface AboutMeComponentStyles extends Theme {
  aboutMeWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type AboutMeComponentClasses = "aboutMeWrapperStyles";

const AboutMeComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const aboutMeComponentStyles = makeStyles({
    aboutMeWrapperStyles: {
      backgroundColor: "red"
    }
  });

  const styles = aboutMeComponentStyles();

  return <AboutMeComponent styles={styles} />;
};

export default AboutMeComponentWrapper;
