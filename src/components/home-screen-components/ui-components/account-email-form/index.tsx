import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import AccountEmailFormComponent from "./AccountEmailForm";

export interface AccountEmailFormComponentStyles extends Theme {
  accountEmailFormWrapperStyles: CreateCSSProperties | CSSProperties;
  formStyle: CreateCSSProperties | CSSProperties;
}

export type AccountEmailFormComponentClasses = "accountEmailFormWrapperStyles" | "formStyle";

const AccountEmailFormComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const accountEmailFormComponentStyles = makeStyles({
    accountEmailFormWrapperStyles: {
      width: "385px",
      borderRadius: "15px"
    },
    formStyle: {
      padding: "1rem"
    }
  });

  const styles = accountEmailFormComponentStyles();

  return <AccountEmailFormComponent styles={styles} />;
};

export default AccountEmailFormComponentWrapper;
