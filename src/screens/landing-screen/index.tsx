import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../styles/theme";
import LandingScreen from "./LandingScreen";

export interface LandingScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type LandingScreenClasses = "pageWrapperStyles";

interface Props {
  children: React.ReactNode;
}

const LandingScreenWrapper: React.FC<Props> = ({ children }): JSX.Element => {
  console.log(children);
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

  return (
    <LandingScreen styles={styles}>
      <>{children}</>
    </LandingScreen>
  );
};

export default LandingScreenWrapper;
