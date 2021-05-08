import { makeStyles, Theme, useMediaQuery, useTheme } from "@material-ui/core";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import Other from "./Other";

export interface OtherComponentStyles extends Theme {
  otherWrapperStyles: CreateCSSProperties | CSSProperties;
  formStyle: CreateCSSProperties | CSSProperties;
  formContainerWrapper: CreateCSSProperties | CSSProperties;
  drivingLicenseTextContainer: CreateCSSProperties | CSSProperties;
  drivingLicenseHeader: CreateCSSProperties | CSSProperties;
  textAreaStyle: CreateCSSProperties | CSSProperties;
  cardButtonSubmitStyles: CreateCSSProperties | CSSProperties;
  cardButtonClearStyles: CreateCSSProperties | CSSProperties;
  mainHeader: CreateCSSProperties | CSSProperties;
  mainHeaderContainer: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
}

export type OtherComponentClasses =
  | "otherWrapperStyles"
  | "formStyle"
  | "formContainerWrapper"
  | "drivingLicenseTextContainer"
  | "drivingLicenseHeader"
  | "textAreaStyle"
  | "cardButtonSubmitStyles"
  | "cardButtonClearStyles"
  | "mainHeader"
  | "mainHeaderContainer"
  | "alertStyle";

const OtherComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const mediumScreen = useMediaQuery("(max-width:1480px)");
  const smallScreen = useMediaQuery("(max-width:1080px)");
  const xSmallScreen = useMediaQuery("(max-width:1020px)");
  const xxSmallScreen = useMediaQuery("(max-width:960px)");

  const otherComponentStyles = makeStyles({
    otherWrapperStyles: {
      margin: "auto"
    },
    drivingLicenseTextContainer: {
      display: "flex",
      flexDirection: "column",
      marginBottom: mediumScreen ? "1rem" : "0rem"
    },
    formStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    formContainerWrapper: {
      display: "flex",
      flexDirection: mediumScreen ? "column" : "row",
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
    drivingLicenseHeader: {
      marginBottom: theme.customSpacings.xs,
      fontSize: "1.2rem"
    },
    textAreaStyle: {
      minWidth: xxSmallScreen
        ? "400px"
        : xSmallScreen
        ? "33vw"
        : smallScreen
        ? "37vw"
        : mediumScreen
        ? "40vw"
        : "25vw",
      minHeight: "200px",
      resize: "none",
      marginBottom: theme.customSpacings.s,
      border: "2px solid #cccccc",
      padding: "5px",
      fontFamily: "Tahoma, sans-serif",
      borderRadius: "3px"
    },
    mainHeaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.customSpacings.m
    },
    mainHeader: {
      fontSize: "1.6rem",
      fontWeight: "bold"
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

  const styles = otherComponentStyles();

  return <Other styles={styles} />;
};

export default OtherComponentWrapper;
