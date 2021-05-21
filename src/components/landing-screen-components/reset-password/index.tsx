import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { MainTheme } from "../../../styles/theme/index";
import RequestResetPassword from "./ResetPassword";

export type ResetPasswordComponentClasses =
  | "resetPasswordPaper"
  | "resetPasswordContainer"
  | "headingStyle"
  | "paragraphStyle"
  | "backToLogin"
  | "resetPasswordContainerButtonSpacer"
  | "alertStyle"
  | "agreementButton"
  | "successLogin";

const ResetPasswordComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const resetPasswordComponentStyles = makeStyles({
    resetPasswordPaper: {
      backgroundColor: `${theme.custom.palette.lightBackground.main}`,
      height: "auto",
      width: "434px",
      minHeight: "280x",
      minWidth: "280px",
      borderRadius: "3px"
    },
    resetPasswordContainer: {
      padding: `${theme.customSpacings.xxl} ${theme.customSpacings.xxl}`
    },
    headingStyle: {
      color: `${theme.custom.palette.textVariantDark.main}`,
      lineHeight: "1.45rem",
      marginBottom: `${theme.customSpacings.s}`
    },
    paragraphStyle: {
      marginBottom: `${theme.customSpacings.m}`,
      color: `${theme.custom.palette.textVariantGrey.main}`,
      fontSize: "0.85rem"
    },
    backToLogin: {
      color: `${theme.custom.palette.textVariantDark.light}`,
      fontSize: "0.85rem",
      lineHeight: "1.25rem"
    },
    resetPasswordContainerButtonSpacer: {
      marginTop: `${theme.customSpacings.s}`,
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

  const styles = resetPasswordComponentStyles();

  return <RequestResetPassword styles={styles} />;
};

export default ResetPasswordComponentWrapper;
