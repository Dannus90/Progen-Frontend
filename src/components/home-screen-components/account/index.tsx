import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme";
import AccountComponent from "./Account";

export interface AccountComponentStyles extends Theme {
  accountComponentStyles: CreateCSSProperties | CSSProperties;
  formsContainer: CreateCSSProperties | CSSProperties;
}

export type AccountComponentClasses = "accountWrapperStyles" | "formsContainer";

const AccountComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:700px)");

  const accountComponentStyles = makeStyles({
    accountWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      display: "flex",
      flexDirection: "column"
    },
    formsContainer: {
      display: "flex",
      flexDirection: smallScreen ? "column" : "row",
      justifyContent: "space-between"
    }
  });

  const styles = accountComponentStyles();

  return <AccountComponent styles={styles} />;
};

export default AccountComponentWrapper;
