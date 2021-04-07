import {
  Avatar,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import React from "react";
import { DrawerComponentClasses } from ".";

interface Props {
  styles: ClassNameMap<DrawerComponentClasses>;
  window?: any;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const DrawerComponent: React.FC<Props> = ({
  styles,
  window,
  handleDrawerToggle,
  mobileOpen
}): JSX.Element => {
  const drawerBody = (
    <>
      <Divider />
      <Avatar className={styles.sizeAvatar} />
      <Typography className={styles.avatarName} variant="h6">
        Daniel Persson
      </Typography>
      <Typography className={styles.avatarOccupation}>Software Developer</Typography>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <AccessAlarm /> : <ThreeDRotation />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: styles.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}>
          {drawerBody}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: styles.drawerPaper
          }}
          variant="permanent"
          open>
          {drawerBody}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default DrawerComponent;
