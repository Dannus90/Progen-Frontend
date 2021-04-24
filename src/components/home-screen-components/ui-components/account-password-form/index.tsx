import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import AccountPasswordFormComponent from "./AccountPasswordForm";

export interface AccountEmailFormComponentStyles extends Theme {
  accountPasswordFormWrapperStyles: CreateCSSProperties | CSSProperties;
  formStyle: CreateCSSProperties | CSSProperties;
  headerWrapper: CreateCSSProperties | CSSProperties;
  headerStyles: CreateCSSProperties | CSSProperties;
  cardActionsStyle: CreateCSSProperties | CSSProperties;
  cardButtonSubmitStyles: CreateCSSProperties | CSSProperties;
  cardButtonClearStyles: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
}

export type AccountPasswordFormComponentClasses =
  | "accountPasswordFormWrapperStyles"
  | "formStyle"
  | "headerWrapper"
  | "headerStyles"
  | "cardActionsStyle"
  | "cardButtonSubmitStyles"
  | "cardButtonClearStyles"
  | "alertStyle";

const AccountPasswordFormComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:700px)");

  const accountPasswordFormComponentStyles = makeStyles({
    accountPasswordFormWrapperStyles: {
      width: "auto",
      borderRadius: "15px",
      marginLeft: smallScreen ? "0rem" : "1rem",
      minWidth: "250px"
    },
    formStyle: {
      padding: "1rem"
    },
    headerWrapper: {
      display: "flex",
      alignItems: "center",
      padding: "1.25rem 1rem",
      borderBottom: theme.custom.borderColors.subtleGreyMain
    },
    headerStyles: {
      color: theme.custom.palette.textVariantDark.medium,
      margin: "auto",
      fontSize: "1.2rem"
    },
    cardActionsStyle: {
      padding: "1rem"
    },
    cardButtonSubmitStyles: {
      width: "50%"
    },
    cardButtonClearStyles: {
      width: "50%",
      color: theme.custom.palette.lightBackground.main
    },
    alertStyle: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 10px",
      margin: "0px 16px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.xxxs}`
    }
  });

  const styles = accountPasswordFormComponentStyles();

  return <AccountPasswordFormComponent styles={styles} />;
};

export default AccountPasswordFormComponentWrapper;
