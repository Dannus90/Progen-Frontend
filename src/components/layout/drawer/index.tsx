import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import DrawerComponent from "./Drawer";

export interface DrawerComponentStyles extends Theme {
  drawer: CreateCSSProperties | CSSProperties;
  drawerPaper: CreateCSSProperties | CSSProperties;
  sizeAvatar: CreateCSSProperties | CSSProperties;
  avatarName: CreateCSSProperties | CSSProperties;
  avatarOccupation: CreateCSSProperties | CSSProperties;
  logoutIcon: CreateCSSProperties | CSSProperties;
  listStyle: CreateCSSProperties | CSSProperties;
  listItemStyle: CreateCSSProperties | CSSProperties;
  boxDivider: CreateCSSProperties | CSSProperties;
  progressContainer: CreateCSSProperties | CSSProperties;
}

export type DrawerComponentClasses =
  | "drawer"
  | "drawerPaper"
  | "sizeAvatar"
  | "avatarName"
  | "avatarOccupation"
  | "logoutIcon"
  | "listStyle"
  | "listItemStyle"
  | "boxDivider"
  | "progressContainer";

interface Props {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const drawerWidth = "240px";

const DrawerComponentWrapper: React.FC<Props> = ({
  handleDrawerToggle,
  mobileOpen
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const drawerComponentStyles = makeStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop: "52px"
    },
    sizeAvatar: {
      height: "125px",
      width: "125px",
      margin: "0px auto",
      marginTop: "45px",
      marginBottom: "15px"
    },
    avatarName: {
      color: theme.custom.palette.textVariantDark.medium,
      textAlign: "center"
    },
    avatarOccupation: {
      color: theme.custom.palette.textVariantGrey.light,
      textAlign: "center",
      marginBottom: "25px"
    },
    logoutIcon: {
      transform: "rotate(180deg)",
      color: theme.custom.palette.listItemStyle.main
    },
    listStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "space-between",
      height: "calc(100vh - 325px)"
    },
    listItemStyle: {
      color: theme.custom.palette.listItemStyle.main
    },
    boxDivider: {
      borderTop: theme.custom.borderColors.subtleGreyMain
    },
    progressContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });

  const styles = drawerComponentStyles();

  return (
    <DrawerComponent
      handleDrawerToggle={handleDrawerToggle}
      mobileOpen={mobileOpen}
      styles={styles}
    />
  );
};

export default DrawerComponentWrapper;
