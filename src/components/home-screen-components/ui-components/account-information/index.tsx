import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import AccountInformationComponent from "./AccountInformation";

export interface AccountInformationComponentStyles extends Theme {
  accountInformationWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type AccountInformationComponentClasses = "accountInformationWrapperStyles";

const AccountInformationComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const accountInformationComponentStyles = makeStyles({
    accountInformationWrapperStyles: {
      width: "385px",
      borderRadius: "15px"
    }
  });

  const styles = accountInformationComponentStyles();

  return <AccountInformationComponent styles={styles} />;
};

export default AccountInformationComponentWrapper;
