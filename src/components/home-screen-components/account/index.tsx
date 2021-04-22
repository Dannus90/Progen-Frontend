import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme";
import AccountComponent from "./Account";

export interface AccountComponentStyles extends Theme {
  accountComponentStyles: CreateCSSProperties | CSSProperties;
  formsContainer: CreateCSSProperties | CSSProperties;
  informationContainer: CreateCSSProperties | CSSProperties;
}

export type AccountComponentClasses =
  | "accountWrapperStyles"
  | "formsContainer"
  | "informationContainer";

const AccountComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const accountComponentStyles = makeStyles({
    accountWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      display: "flex",
      flexDirection: "column"
    },
    formsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    informationContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });

  const styles = accountComponentStyles();

  return <AccountComponent styles={styles} />;
};

export default AccountComponentWrapper;
