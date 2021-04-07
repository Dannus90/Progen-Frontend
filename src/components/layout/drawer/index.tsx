import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import DrawerComponent from "./Drawer";

export interface DrawerComponentStyles extends Theme {
  drawerOpen: CreateCSSProperties | CSSProperties;
  drawerClose: CreateCSSProperties | CSSProperties;
  drawer: CreateCSSProperties | CSSProperties;
  toolbar: CreateCSSProperties | CSSProperties;
}

export type DrawerComponentClasses = "drawerOpen" | "drawerClose" | "drawer" | "toolbar";

const drawerWidthLargeScreen = "300px";
const drawerWidthMediumScreen = "270px";
const drawerWidthSmallScreen = "240px";

const DrawerComponentWrapper: React.FC = (): JSX.Element => {
  const smallScreen = useMediaQuery("(max-width:600px)");
  const mediumScreen = useMediaQuery("(max-width:1000px)");
  const theme = useTheme<MainTheme>();

  const drawerComponentStyles = makeStyles({
    drawer: {
      width: smallScreen
        ? drawerWidthSmallScreen
        : mediumScreen
        ? drawerWidthMediumScreen
        : drawerWidthLargeScreen,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: smallScreen
        ? drawerWidthSmallScreen
        : mediumScreen
        ? drawerWidthMediumScreen
        : drawerWidthLargeScreen,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    }
  });

  const styles = drawerComponentStyles();

  return <DrawerComponent styles={styles} />;
};

export default DrawerComponentWrapper;
