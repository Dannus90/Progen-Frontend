import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import LanguagePicker from "./LanguagePicker";

export interface LanguagePickerComponentStyles extends Theme {
  registerPaper: CreateCSSProperties | CSSProperties;
}

export type LanguagePickerComponentClasses = "registerPaper";

const LanguagePickerComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const languagePickerComponentStyles = makeStyles({
    registerPaper: {
      backgroundColor: `${theme.custom.palette.lightBackground.main}`,
      height: "auto",
      width: "434px",
      minHeight: "280x",
      minWidth: "280px",
      borderRadius: "3px"
    }
  });

  const styles = languagePickerComponentStyles();

  return <LanguagePicker styles={styles} />;
};

export default LanguagePickerComponentWrapper;
