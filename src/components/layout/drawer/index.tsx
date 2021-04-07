import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme/index";
import DrawerComponent from "./Drawer";

export interface DrawerComponentStyles extends Theme {
  drawer: CreateCSSProperties | CSSProperties;
  drawerPaper: CreateCSSProperties | CSSProperties;
}

export type DrawerComponentClasses = "drawer" | "drawerPaper";

interface Props {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const drawerWidth = "240px";

const DrawerComponentWrapper: React.FC<Props> = (): JSX.Element => {
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
    }
  });

  const styles = drawerComponentStyles();

  return <DrawerComponent styles={styles} />;
};

export default DrawerComponentWrapper;
