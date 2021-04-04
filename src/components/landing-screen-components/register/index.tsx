import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import Register from "./Register";

export interface RegisterComponentStyles extends Theme {
  registerPaper: CreateCSSProperties | CSSProperties;
  registerContainer: CreateCSSProperties | CSSProperties;
  headingStyle: CreateCSSProperties | CSSProperties;
  paragraphStyle: CreateCSSProperties | CSSProperties;
  termsAgreementContainer: CreateCSSProperties | CSSProperties;
  termsAgreementText: CreateCSSProperties | CSSProperties;
  submitButtonSpacer: CreateCSSProperties | CSSProperties;
  passwordRules: CreateCSSProperties | CSSProperties;
}

export type RegisterComponentClasses =
  | "registerPaper"
  | "registerContainer"
  | "headingStyle"
  | "paragraphStyle"
  | "termsAgreementContainer"
  | "termsAgreementText"
  | "submitButtonSpacer"
  | "passwordRules";

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
      padding: `${theme.customSpacings.xxl} ${theme.customSpacings.xxl}`
    },
    headingStyle: {
      color: `${theme.custom.palette.textVariantDark.main}`
    },
    paragraphStyle: {
      marginBottom: `${theme.customSpacings.m}`,
      color: `${theme.custom.palette.textVariantGrey.main}`,
      fontSize: "0.85rem"
    },
    termsAgreementContainer: {
      display: "flex",
      alignItems: "center",
      padding: "0px",
      marginBottom: `${theme.customSpacings.m}`
    },
    termsAgreementText: {
      color: `${theme.custom.palette.textVariantDark.light}`,
      fontSize: "0.85rem",
      lineHeight: "1.25rem"
    },
    submitButtonSpacer: {
      marginBottom: `${theme.customSpacings.xxs}`
    },
    passwordRules: {
      color: `${theme.custom.palette.textVariantGrey.light}`,
      fontSize: "0.8rem",
      marginLeft: `${theme.customSpacings.xxs}`,
      marginTop: `${theme.customSpacings.xxxs}`,
      lineHeight: "1.25rem"
    }
  });

  const styles = registerComponentStyles();

  return <Register styles={styles} />;
};

export default RegisterComponentWrapper;
