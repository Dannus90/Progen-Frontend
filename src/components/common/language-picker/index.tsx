import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import LanguagePicker from "./LanguagePicker";

export interface LanguagePickerComponentStyles extends Theme {
  languagesPaper: CreateCSSProperties | CSSProperties;
  languageButton: CreateCSSProperties | CSSProperties;
}

export type LanguagePickerComponentClasses = "languagesPaper" | "languageButton";

const LanguagePickerComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const languagePickerComponentStyles = makeStyles({
    languagesPaper: {
      backgroundColor: `${theme.custom.palette.lightBackground.main}`,
      height: "auto",
      width: "auto",
      borderRadius: "3px",
      display: "flex",
      justifyContent: "center",
      alignItems: "left",
      flexDirection: "column",
      padding: `${theme.customSpacings.s}`,
      position: "absolute",
      top: "45px",
      right: "7.5px"
    },
    languageButton: {
      border: "none",
      outline: "none",
      cursor: "pointer",
      padding: "0.15rem 0.3rem",
      backgroundColor: `${theme.palette.secondary.main}`,
      marginBottom: `${theme.customSpacings.xxs}`,
      borderRadius: "3px",
      color: `${theme.custom.palette.lightBackground}`
    }
  });

  const styles = languagePickerComponentStyles();

  return <LanguagePicker styles={styles} />;
};

export default LanguagePickerComponentWrapper;
