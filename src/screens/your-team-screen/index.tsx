import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../styles/theme";
import YourTeamScreen from "./YourTeamScreen";

export interface YourTeamScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type YourTeamScreenClasses = "pageWrapperStyles";

const YourTeamScreenWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const smallScreen = useMediaQuery("(max-width:960px)");

  const yourTeamScreenStyles = makeStyles({
    pageWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      minHeight: "calc(100vh - 52px)",
      marginTop: "52px",
      width: smallScreen ? "100vw" : "calc(100vw - 240px)",
      marginLeft: smallScreen ? "0px" : "240px"
    }
  });

  const styles = yourTeamScreenStyles();

  return <YourTeamScreen styles={styles} />;
};

export default YourTeamScreenWrapper;
