import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import AccountPasswordFormComponent from "./AccountPasswordForm";

export interface AccountEmailFormComponentStyles extends Theme {
  accountPasswordFormWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type AccountPasswordFormComponentClasses = "accountPasswordFormWrapperStyles";

const AccountPasswordFormComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const accountPasswordFormComponentStyles = makeStyles({
    accountPasswordFormWrapperStyles: {
      width: "385px",
      borderRadius: "15px"
    }
  });

  const styles = accountPasswordFormComponentStyles();

  return <AccountPasswordFormComponent styles={styles} />;
};

export default AccountPasswordFormComponentWrapper;
