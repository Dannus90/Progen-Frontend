import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import TopBar from "./TopBar";

export interface LandingScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
  toolBarStyle: CreateCSSProperties | CSSProperties;
}

export type TopBarClasses = "topBarStyle" | "toolBarStyle";

const TopBarWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const topBarStyles = makeStyles({
    topBarStyle: {
      background: `${theme.landingScreenBackground}`,
      height: "52px",
      display: "flex",
      justifyContent: "center"
    },
    toolBarStyle: {
      display: "flex",
      justifyContent: "space-between"
    }
  });

  const styles = topBarStyles();

  return <TopBar styles={styles} />;
};

export default TopBarWrapper;
