import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { MainTheme } from "../../../styles/theme/index";
import Login from "./Login";

export type LoginComponentClasses =
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

  const loginComponentStyles = makeStyles({
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
      lineHeight: "1.25rem",
      textAlign: "right"
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

  const styles = loginComponentStyles();

  return <Login styles={styles} />;
};

export default LoginComponentWrapper;
