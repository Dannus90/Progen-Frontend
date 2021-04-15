import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../styles/theme";
import HomeScreen from "./HomeScreen";

export interface HomeScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
  tabsStyle: CreateCSSProperties | CSSProperties;
}

export type HomeScreenClasses = "pageWrapperStyles" | "tabsStyle";

const HomeScreenWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:960px)");

  const homeScreenStyles = makeStyles({
    pageWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      minHeight: "calc(100vh - 52px)",
      marginTop: "52px",
      width: smallScreen ? "100vw" : "calc(100vw - 240px)",
      marginLeft: smallScreen ? "0px" : "240px"
    },
    tabsStyle: {
      boxShadow: "none",
      borderBottom: `${theme.custom.borderColors.subtleGreyMain}`,
      color: `${theme.custom.palette.textVariantDark.dark}`
    }
  });

  const styles = homeScreenStyles();

  return <HomeScreen styles={styles} />;
};

export default HomeScreenWrapper;
