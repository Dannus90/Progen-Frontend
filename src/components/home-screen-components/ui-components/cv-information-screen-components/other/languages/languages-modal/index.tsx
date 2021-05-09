import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../../../styles/theme";
import { LanguageData } from "../interfaces/languages-interfaces";
import LanguagesModal from "./LanguagesModal";

export interface LanguageModalComponentStyles extends Theme {
  languageModalWrapperStyles: CreateCSSProperties | CSSProperties;
  closeButtonWrapper: CreateCSSProperties | CSSProperties;
  formStyle: CreateCSSProperties | CSSProperties;
  submitButton: CreateCSSProperties | CSSProperties;
  textAreaStyle: CreateCSSProperties | CSSProperties;
  selectStyle: CreateCSSProperties | CSSProperties;
  leaveEmpty: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
  submitButtonWrapper: CreateCSSProperties | CSSProperties;
  buttonsContainer: CreateCSSProperties | CSSProperties;
}

interface Props {
  isCreate: boolean;
  language?: LanguageData;
  handleClose: () => void;
  open: boolean;
  header: string;
}

export type LanguageModalComponentClasses =
  | "languageModalWrapperStyles"
  | "closeButtonWrapper"
  | "formStyle"
  | "submitButton"
  | "textAreaStyle"
  | "selectStyle"
  | "leaveEmpty"
  | "alertStyle"
  | "submitButtonWrapper"
  | "buttonsContainer";

const LanguageModalComponentWrapper: React.FC<Props> = ({
  isCreate,
  language,
  handleClose,
  open,
  header
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const languageModalComponentStyles = makeStyles({
    languageModalWrapperStyles: {
      margin: "auto",
      minWidth: "400px"
    },
    closeButtonWrapper: {
      display: "flex",
      justifyContent: "flex-end"
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "space-between"
    },
    formStyle: {
      padding: "1rem"
    },
    submitButtonWrapper: {
      padding: "1.25rem 1rem"
    },
    submitButton: {
      width: "300px"
    },
    textAreaStyle: {
      minHeight: "300px",
      width: "100%",
      resize: "none",
      marginBottom: theme.customSpacings.s,
      border: "2px solid #cccccc",
      padding: "5px",
      fontFamily: "Tahoma, sans-serif",
      borderRadius: "3px"
    },
    selectStyle: {
      width: "150px"
    },
    leaveEmpty: {
      fontSize: "0.8rem",
      marginLeft: "0.3rem",
      marginTop: "0.2rem",
      color: theme.custom.palette.textVariantGrey.main
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

  const styles = languageModalComponentStyles();

  return (
    <LanguagesModal
      header={header}
      open={open}
      handleClose={handleClose}
      isCreate={isCreate}
      language={language}
      styles={styles}
    />
  );
};

export default LanguageModalComponentWrapper;
