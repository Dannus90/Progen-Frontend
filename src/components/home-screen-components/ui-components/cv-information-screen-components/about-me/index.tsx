import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import AboutMeComponent from "./AboutMe";

export interface AboutMeComponentStyles extends Theme {
  aboutMeWrapperStyles: CreateCSSProperties | CSSProperties;
  aboutMeTextContainer: CreateCSSProperties | CSSProperties;
  cardButtonSubmitStyles: CreateCSSProperties | CSSProperties;
  cardButtonClearStyles: CreateCSSProperties | CSSProperties;
  formStyle: CreateCSSProperties | CSSProperties;
  formContainerWrapper: CreateCSSProperties | CSSProperties;
  textAreaStyle: CreateCSSProperties | CSSProperties;
}

export type AboutMeComponentClasses =
  | "aboutMeWrapperStyles"
  | "aboutMeTextContainer"
  | "cardButtonSubmitStyles"
  | "cardButtonClearStyles"
  | "formStyle"
  | "formContainerWrapper"
  | "textAreaStyle";

const AboutMeComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const aboutMeComponentStyles = makeStyles({
    aboutMeWrapperStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    aboutMeTextContainer: {
      display: "flex",
      flexDirection: "column"
    },
    formStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    formContainerWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.customSpacings.s
    },
    cardButtonSubmitStyles: {},
    cardButtonClearStyles: {
      color: theme.custom.palette.lightBackground.main
    },
    textAreaStyle: {
      minWidth: "300px",
      minHeight: "300px",
      resize: "none",
      marginBottom: theme.customSpacings.s
    }
  });

  const styles = aboutMeComponentStyles();

  return <AboutMeComponent styles={styles} />;
};

export default AboutMeComponentWrapper;
