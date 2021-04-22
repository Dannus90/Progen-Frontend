import { makeStyles, Theme } from "@material-ui/core";
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
}

export type AccountEmailFormComponentClasses =
  | "accountEmailFormWrapperStyles"
  | "formStyle"
  | "headerWrapper"
  | "headerStyles";

const AccountEmailFormComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const accountEmailFormComponentStyles = makeStyles({
    accountEmailFormWrapperStyles: {
      width: "auto",
      borderRadius: "15px",
      marginRight: "1rem"
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
    }
  });

  const styles = accountEmailFormComponentStyles();

  return <AccountEmailFormComponent styles={styles} />;
};

export default AccountEmailFormComponentWrapper;
