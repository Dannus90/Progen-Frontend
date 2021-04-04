import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import Register from "./Register";

export interface RegisterComponentStyles extends Theme {
  registerPaper: CreateCSSProperties | CSSProperties;
  registerContainer: CreateCSSProperties | CSSProperties;
}

export type RegisterComponentClasses = "registerPaper" | "registerContainer";

const RegisterComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const registerComponentStyles = makeStyles({
    registerPaper: {
      backgroundColor: `${theme.custom.palette.lightBackground.main}`,
      height: "auto",
      width: "434px",
      minHeight: "280x",
      minWidth: "280px",
      borderRadius: "3px"
    },
    registerContainer: {
      padding: `${theme.customSpacings.xl} ${theme.customSpacings.l}`
    },
    headingStyle: {
      color: `${theme.custom.palette.textVariantDark.main}`
    }
  });

  const styles = registerComponentStyles();

  return <Register styles={styles} />;
};

export default RegisterComponentWrapper;
