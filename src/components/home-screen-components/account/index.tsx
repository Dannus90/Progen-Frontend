import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme";
import AccountComponent from "./Account";

export interface AccountComponentStyles extends Theme {
  accountComponentStyles: CreateCSSProperties | CSSProperties;
  formsContainer: CreateCSSProperties | CSSProperties;
  accountHeaderContainer: CreateCSSProperties | CSSProperties;
  accountHeader: CreateCSSProperties | CSSProperties;
  accountHeaderCardStyles: CreateCSSProperties | CSSProperties;
}

export type AccountComponentClasses =
  | "accountWrapperStyles"
  | "accountHeaderCardStyles"
  | "formsContainer"
  | "accountHeaderContainer"
  | "accountHeader";

const AccountComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:700px)");

  const accountComponentStyles = makeStyles({
    accountWrapperStyles: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "960px",
      justifyContent: "center",
      margin: "auto"
    },
    accountHeaderCardStyles: {
      width: "auto",
      borderRadius: "15px",
      minWidth: "250px",
      padding: "1rem 0rem",
      margin: "1.5rem",
      marginTop: "0rem",
      marginBottom: theme.customSpacings.m,
      background: `#fff`
    },
    formsContainer: {
      display: "flex",
      flexDirection: smallScreen ? "column" : "row",
      justifyContent: "space-between"
    },
    accountHeaderContainer: {},
    accountHeader: {
      textAlign: "center",
      fontSize: "1.5rem"
    }
  });

  const styles = accountComponentStyles();

  return <AccountComponent styles={styles} />;
};

export default AccountComponentWrapper;
