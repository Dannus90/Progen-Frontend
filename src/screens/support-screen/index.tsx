import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../styles/theme";
import SupportScreen from "./SupportScreen";

export interface SupportScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
  supportContainer: CreateCSSProperties | CSSProperties;
  howToUseContactInfo: CreateCSSProperties | CSSProperties;
  faqContainer: CreateCSSProperties | CSSProperties;
  howToUse: CreateCSSProperties | CSSProperties;
  contactInfo: CreateCSSProperties | CSSProperties;
  howToUseHeader: CreateCSSProperties | CSSProperties;
  howToUseP1: CreateCSSProperties | CSSProperties;
  howToUseP2: CreateCSSProperties | CSSProperties;
  contactHeader: CreateCSSProperties | CSSProperties;
  iconContactContainer: CreateCSSProperties | CSSProperties;
  iconStyle: CreateCSSProperties | CSSProperties;
  contactInfoPart: CreateCSSProperties | CSSProperties;
  faqHeader: CreateCSSProperties | CSSProperties;
  agreementButton: CreateCSSProperties | CSSProperties;
  faqQuestion: CreateCSSProperties | CSSProperties;
  faqAnswer: CreateCSSProperties | CSSProperties;
}

export type SupportScreenClasses =
  | "pageWrapperStyles"
  | "supportContainer"
  | "howToUseContactInfo"
  | "faqContainer"
  | "howToUse"
  | "contactInfo"
  | "howToUseHeader"
  | "howToUseP1"
  | "howToUseP2"
  | "contactHeader"
  | "iconContactContainer"
  | "iconStyle"
  | "contactInfoPart"
  | "faqHeader"
  | "agreementButton"
  | "faqQuestion"
  | "faqAnswer";

const SupportScreenWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:960px)");

  const supportScreenStyles = makeStyles({
    pageWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      minHeight: "calc(100vh - 52px)",
      marginTop: "52px",
      width: smallScreen ? "100vw" : "calc(100vw - 240px)",
      marginLeft: smallScreen ? "0px" : "240px",
      padding: theme.customSpacings.l
    },
    supportContainer: {
      display: "flex",
      flexDirection: smallScreen ? "column" : "row",
      padding: "2rem 1.5rem"
    },
    howToUseContactInfo: {
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.customSpacings.m
    },
    faqContainer: {},
    howToUse: {
      flex: 2
    },
    contactInfo: {
      flex: 1,
      color: theme.custom.palette.textVariantGrey.dark,
      marginTop: theme.customSpacings.xs
    },
    howToUseHeader: {
      fontWeight: "bold",
      fontSize: "1.4rem",
      marginBottom: theme.customSpacings.xs
    },
    howToUseP1: {
      color: "rgba(0, 0, 0, 0.85)"
    },
    howToUseP2: {
      color: "rgba(0, 0, 0, 0.85)"
    },
    contactHeader: {
      fontWeight: "bold",
      fontSize: "1.4rem",
      marginBottom: theme.customSpacings.xs
    },
    iconContactContainer: {
      display: "flex",
      marginBottom: theme.customSpacings.xs,
      alignItems: "center"
    },
    iconStyle: {
      marginRight: theme.customSpacings.xs,
      backgroundColor: theme.custom.palette.textVariantDark.medium,
      color: "#fff",
      borderRadius: "50%",
      padding: "0.2rem"
    },
    contactInfoPart: {
      color: "rgba(0, 0, 0, 0.85)",
      wordBreak: "break-word"
    },
    faqHeader: {
      fontWeight: "bold",
      fontSize: "1.4rem",
      marginBottom: theme.customSpacings.xs
    },
    agreementButton: {
      display: "block",
      color: `${theme.palette.primary.main}`,
      outline: "none",
      width: "100%",
      cursor: "pointer",
      fontSize: "0.9rem",
      fontWeight: "bold",
      listStyle: ""
    },
    faqQuestion: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      marginTop: theme.customSpacings.s
    },
    faqAnswer: {
      color: "rgba(0, 0, 0, 0.85)"
    }
  });

  const styles = supportScreenStyles();

  return <SupportScreen styles={styles} />;
};

export default SupportScreenWrapper;
