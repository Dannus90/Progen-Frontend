import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../styles/theme";
import HomeScreen from "./HomeScreen";

export interface LandingScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type LandingScreenClasses = "pageWrapperStyles";

const LandingScreenWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const landingScreenStyles = makeStyles({
    pageWrapperStyles: {
      background: `${theme.landingScreenBackground}`,
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });

  const styles = landingScreenStyles();

  return <HomeScreen styles={styles} />;
};

export default LandingScreenWrapper;
