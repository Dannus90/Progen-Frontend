import { makeStyles, Theme, useTheme } from "@material-ui/core";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../../styles/theme";
import Languages from "./Languages";

export interface LanguagesComponentStyles extends Theme {
  languagesComponentStyles: CreateCSSProperties | CSSProperties;
  addIconStyles: CreateCSSProperties | CSSProperties;
  loaderContainer: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
  refetchIcon: CreateCSSProperties | CSSProperties;
  versionHeader: CreateCSSProperties | CSSProperties;
  languagesContainer: CreateCSSProperties | CSSProperties;
  languagesHeadingContainer: CreateCSSProperties | CSSProperties;
  languagesHeadingsContainer: CreateCSSProperties | CSSProperties;
}

export type LanguagesComponentClasses =
  | "languagesWrapperStyles"
  | "addIconStyles"
  | "loaderContainer"
  | "alertStyle"
  | "refetchIcon"
  | "versionHeader"
  | "languagesContainer"
  | "languagesHeadingContainer"
  | "languagesHeadingsContainer";

const LanguagesComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const languagesComponentStyles = makeStyles({
    languagesWrapperStyles: {
      margin: "auto",
      marginTop: theme.customSpacings.l
    },
    addIconStyles: {
      cursor: "pointer",
      transform: "translateX(2px)",
      borderRadius: "100px",
      width: "25px",
      height: "25px",
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(238, 238, 238, 1)"
      },
      "&:active": {
        transform: "scale(0.975) translateX(2px)"
      }
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
    },
    versionHeader: {
      fontSize: "1.1em",
      fontWeight: "bold",
      marginBottom: "0.5rem"
    },
    languagesContainer: {
      display: "flex",
      flexDirection: "column"
    },
    languagesHeadingContainer: {
      display: "flex",
      width: "50%",
      justifyContent: "space-between"
    },
    languagesHeadingsContainer: {
      display: "flex",
      flexDirection: "row"
    }
  });

  const styles = languagesComponentStyles();

  return <Languages styles={styles} />;
};

export default LanguagesComponentWrapper;
