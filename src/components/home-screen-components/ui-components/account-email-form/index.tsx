import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import AccountEmailFormComponent from "./AccountEmailForm";

export interface AccountEmailFormComponentStyles extends Theme {
  accountEmailFormWrapperStyles: CreateCSSProperties | CSSProperties;
  formStyle: CreateCSSProperties | CSSProperties;
  headerWrapper: CreateCSSProperties | CSSProperties;
  headerStyles: CreateCSSProperties | CSSProperties;
  cardActionsStyle: CreateCSSProperties | CSSProperties;
  cardButtonSubmitStyles: CreateCSSProperties | CSSProperties;
  cardButtonClearStyles: CreateCSSProperties | CSSProperties;
}

export type AccountEmailFormComponentClasses =
  | "accountEmailFormWrapperStyles"
  | "formStyle"
  | "headerWrapper"
  | "headerStyles"
  | "cardActionsStyle"
  | "cardButtonSubmitStyles"
  | "cardButtonClearStyles";

const AccountEmailFormComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:700px)");

  const accountEmailFormComponentStyles = makeStyles({
    accountEmailFormWrapperStyles: {
      width: "auto",
      borderRadius: "15px",
      marginRight: smallScreen ? "0rem" : "1rem",
      marginBottom: smallScreen ? "1.75rem" : "0rem",
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
    }
  });

  const styles = accountEmailFormComponentStyles();

  return <AccountEmailFormComponent styles={styles} />;
};

export default AccountEmailFormComponentWrapper;
