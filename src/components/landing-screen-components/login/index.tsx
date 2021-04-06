import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import Login from "./Login";

export interface RegisterComponentStyles extends Theme {
  loginPaper: CreateCSSProperties | CSSProperties;
  loginContainer: CreateCSSProperties | CSSProperties;
  headingStyle: CreateCSSProperties | CSSProperties;
  paragraphStyle: CreateCSSProperties | CSSProperties;
  termsAgreementContainer: CreateCSSProperties | CSSProperties;
  noAccountText: CreateCSSProperties | CSSProperties;
  loginButtonSpacer: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
  agreementButton: CreateCSSProperties | CSSProperties;
  successLogin: CreateCSSProperties | CSSProperties;
}

export type RegisterComponentClasses =
  | "loginPaper"
  | "loginContainer"
  | "headingStyle"
  | "paragraphStyle"
  | "noAccountText"
  | "loginButtonSpacer"
  | "alertStyle"
  | "agreementButton"
  | "successLogin";

const LoginComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const registerComponentStyles = makeStyles({
    loginPaper: {
      backgroundColor: `${theme.custom.palette.lightBackground.main}`,
      height: "auto",
      width: "434px",
      minHeight: "280x",
      minWidth: "280px",
      borderRadius: "3px"
    },
    loginContainer: {
      padding: `${theme.customSpacings.xxl} ${theme.customSpacings.xxl}`
    },
    headingStyle: {
      color: `${theme.custom.palette.textVariantDark.main}`,
      lineHeight: "1.45rem",
      marginBottom: `${theme.customSpacings.xxxs}`
    },
    paragraphStyle: {
      marginBottom: `${theme.customSpacings.m}`,
      color: `${theme.custom.palette.textVariantGrey.main}`,
      fontSize: "0.85rem"
    },
    noAccountText: {
      color: `${theme.custom.palette.textVariantDark.light}`,
      fontSize: "0.85rem",
      lineHeight: "1.25rem"
    },
    loginButtonSpacer: {
      marginTop: `${theme.customSpacings.l}`,
      marginBottom: `${theme.customSpacings.xxs}`
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
    agreementButton: {
      textDecoration: "underline",
      color: `${theme.palette.primary.main}`,
      outline: "none",
      width: "100%",
      cursor: "pointer"
    },
    successLogin: {
      paddingRight: "1rem"
    }
  });

  const styles = registerComponentStyles();

  return <Login styles={styles} />;
};

export default LoginComponentWrapper;
