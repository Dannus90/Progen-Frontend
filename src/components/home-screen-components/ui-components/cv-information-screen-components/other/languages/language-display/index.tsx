import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../../../styles/theme";
import { GetLanguageResponse } from "../../interfaces/other-information-interfaces";
import LanguageDisplayComponent from "../language-display/LanguageDisplay";

export interface LanguageDisplayComponentStyles extends Theme {
  languageDisplayWrapperStyles: CreateCSSProperties | CSSProperties;
  headingIconWrapper: CreateCSSProperties | CSSProperties;
  editIcon: CreateCSSProperties | CSSProperties;
  languageContainer: CreateCSSProperties | CSSProperties;
  language: CreateCSSProperties | CSSProperties;
}

export type LanguageDisplayComponentClasses =
  | "languageDisplayWrapperStyles"
  | "headingIconWrapper"
  | "editIcon"
  | "languageContainer"
  | "language";

interface Props {
  languageData: GetLanguageResponse;
}

const LanguageDisplayComponentWrapper: React.FC<Props> = ({ languageData }): JSX.Element => {
  const languageComponentStyles = makeStyles({
    languageDisplayWrapperStyles: {
      display: "flex",
      flexDirection: "row"
    },
    languageContainer: {
      width: "50%"
    },
    language: {
      fontSize: "0.95rem",
      marginBottom: "0.25rem"
    },
    headingIconWrapper: {
      display: "flex",
      justifyContent: "space-between"
    },
    editIcon: {
      cursor: "pointer",
      borderRadius: "100px",
      width: "20px",
      height: "20px",
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(238, 238, 238, 1)"
      },
      "&:active": {
        transform: "scale(0.975)"
      }
    }
  });

  const styles = languageComponentStyles();

  return <LanguageDisplayComponent languageData={languageData} styles={styles} />;
};

export default LanguageDisplayComponentWrapper;
