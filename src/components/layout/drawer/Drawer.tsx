import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import clsx from "clsx";
import { useState } from "react";
import { DrawerComponentClasses } from ".";

interface Props {
  styles: ClassNameMap<DrawerComponentClasses>;
}

const DrawerComponent: React.FC<Props> = ({ styles }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(true);
  
  const handleDrawerOpen = (): void => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = (): void => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(styles.drawer, {
          [styles.drawerOpen]: drawerOpen,
          [styles.drawerClose]: !drawerOpen
        })}
        classes={{
          paper: clsx({
            [styles.drawerOpen]: drawerOpen,
            [styles.drawerClose]: !drawerOpen
          })
        }}>
        <div className={styles.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <AccessAlarm /> : <ThreeDRotation />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AccessAlarm /> : <ThreeDRotation />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AccessAlarm /> : <ThreeDRotation />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponent;