import { makeStyles, Theme, useTheme } from "@material-ui/core";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../../styles/theme";
import Languages from "./Languages";

export interface LanguagesComponentStyles extends Theme {
  languagesComponentStyles: CreateCSSProperties | CSSProperties;
  languagesHeader: CreateCSSProperties | CSSProperties;
  languagesHeaderContainer: CreateCSSProperties | CSSProperties;
  addIconStyles: CreateCSSProperties | CSSProperties;
}

export type LanguagesComponentClasses =
  | "languagesWrapperStyles"
  | "languagesHeader"
  | "languagesHeaderContainer"
  | "addIconStyles";

const LanguagesComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const languagesComponentStyles = makeStyles({
    languagesWrapperStyles: {
      margin: "auto",
      marginTop: "1.6rem"
    },
    languagesHeader: {
      fontSize: "1.6rem",
      fontWeight: "bold"
    },
    languagesHeaderContainer: {
      display: "flex",
      justifyContent: "center",
      position: "relative"
    },
    addIconStyles: {
      position: "absolute",
      right: "43px",
      cursor: "pointer",
      borderRadius: "100px",
      width: "25px",
      height: "25px",
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(238, 238, 238, 1)"
      },
      "&:active": {
        transform: "scale(0.975)"
      }
    }
  });

  const styles = languagesComponentStyles();

  return <Languages styles={styles} />;
};

export default LanguagesComponentWrapper;
