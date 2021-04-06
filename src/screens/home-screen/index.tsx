import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../styles/theme";
import HomeScreen from "./HomeScreen";

export interface LandingScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type HomeScreenClasses = "pageWrapperStyles";

const HomeScreenWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const homeScreenStyles = makeStyles({
    pageWrapperStyles: {
      background: `${theme.landingScreenBackground}`,
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });

  const styles = homeScreenStyles();

  return <HomeScreen styles={styles} />;
};

export default HomeScreenWrapper;
