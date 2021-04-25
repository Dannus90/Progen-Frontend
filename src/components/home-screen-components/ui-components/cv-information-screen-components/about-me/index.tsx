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
  presentationHeader: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
}

export type AboutMeComponentClasses =
  | "aboutMeWrapperStyles"
  | "aboutMeTextContainer"
  | "cardButtonSubmitStyles"
  | "cardButtonClearStyles"
  | "formStyle"
  | "formContainerWrapper"
  | "textAreaStyle"
  | "presentationHeader"
  | "alertStyle";

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
    cardButtonSubmitStyles: {
      width: "40%"
    },
    cardButtonClearStyles: {
      color: theme.custom.palette.lightBackground.main
    },
    presentationHeader: {
      marginBottom: theme.customSpacings.xs,
      fontSize: "1.2rem"
    },
    textAreaStyle: {
      minWidth: "25vw",
      minHeight: "300px",
      resize: "none",
      marginBottom: theme.customSpacings.s,
      border: "2px solid #cccccc",
      padding: "5px",
      fontFamily: "Tahoma, sans-serif",
      borderRadius: "3px"
    },
    alertStyle: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 10px",
      margin: "0px 16px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.xs}`
    }
  });

  const styles = aboutMeComponentStyles();

  return <AboutMeComponent styles={styles} />;
};

export default AboutMeComponentWrapper;
