import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import TopBar from "./Topbar";

export interface LandingScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
  toolBarStyle: CreateCSSProperties | CSSProperties;
  menuButton: CreateCSSProperties | CSSProperties;
  languageProfileContainer: CreateCSSProperties | CSSProperties;
  languageIcon: CreateCSSProperties | CSSProperties;
}

export type TopBarClasses =
  | "topBarStyle"
  | "toolBarStyle"
  | "menuButton"
  | "languageProfileContainer"
  | "languageIcon";

interface Props {
  handleDrawerToggle: () => void;
}

const TopBarWrapper: React.FC<Props> = ({ handleDrawerToggle }): JSX.Element => {
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
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    languageIcon: {
      fontSize: "1.5rem",
      color: theme.custom.palette.lightBackground.main,
      cursor: "pointer",
      marginRight: theme.customSpacings.s
    },
    languageProfileContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    }
  });

  const styles = topBarStyles();

  return <TopBar handleDrawerToggle={handleDrawerToggle} styles={styles} />;
};

export default TopBarWrapper;
