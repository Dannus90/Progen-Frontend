import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { MainTheme } from "../../../styles/theme/index";
import RequestResetPassword from "./RequestResetPassword";

export type RequestResetPasswordComponentClasses =
  | "requestResetPasswordPaper"
  | "requestResetPasswordContainer"
  | "headingStyle"
  | "paragraphStyle"
  | "backToLogin"
  | "requestResetPasswordContainerButtonSpacer"
  | "alertStyle";

const RequestResetPasswordComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const requestResetPasswordComponentStyles = makeStyles({
    requestResetPasswordPaper: {
      backgroundColor: `${theme.custom.palette.lightBackground.main}`,
      height: "auto",
      width: "434px",
      minHeight: "280x",
      minWidth: "280px",
      borderRadius: "3px"
    },
    requestResetPasswordContainer: {
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
    requestResetPasswordContainerButtonSpacer: {
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
    }
  });

  const styles = requestResetPasswordComponentStyles();

  return <RequestResetPassword styles={styles} />;
};

export default RequestResetPasswordComponentWrapper;
