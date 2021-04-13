import { useMutation } from "@apollo/client";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ExitToAppRounded, Dashboard, Group, ContactSupportOutlined } from "@material-ui/icons";
import React from "react";
import { DrawerComponentClasses } from ".";
import { LOGOUT_USER } from "./gql";
import { LogoutUserResponseBackend } from "./interfaces/drawer-interfaces";
import { useNavigation } from "../../../custom-hooks/UseNavigation";
import { useTranslation } from "react-i18next";

interface Props {
  styles: ClassNameMap<DrawerComponentClasses>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const { navigateTo } = useNavigation();
  const [t] = useTranslation("common");
  const [logoutUser] = useMutation<LogoutUserResponseBackend>(LOGOUT_USER);

  const handleLogoutUser = async () => {
    const response = await logoutUser();
    if (response.data === null && response.errors) {
      return;
    }

    navigateTo("/login");
  };

  const listIconsUpper = [
    {
      name: "dashboard",
      icon: <Dashboard />
    },
    {
      name: "team",
      icon: <Group />
    }
  ];

  const listIconsLower = [
    {
      name: "support",
      icon: <ContactSupportOutlined />
    }
  ];

  const drawerBody = (
    <>
      <Divider />
      <Avatar className={styles.sizeAvatar} src="./assets/images/SmallProfile.jpg" />
      <Typography className={styles.avatarName} variant="h6">
        Daniel Persson
      </Typography>
      <Typography className={styles.avatarOccupation}>Software Developer</Typography>
      <Divider />
      <List className={styles.listStyle}>
        <Box>
          {listIconsUpper.map((item) => (
            <ListItem button key={item.name}>
              <ListItemIcon className={styles.listItemStyle}>{item.icon}</ListItemIcon>
              <ListItemText className={styles.listItemStyle} primary={t(`list.${item.name}`)} />
            </ListItem>
          ))}
        </Box>
        <Box className={styles.boxDivider}>
          {listIconsLower.map((item) => (
            <ListItem button key={item.name}>
              <ListItemIcon className={styles.listItemStyle}>{item.icon}</ListItemIcon>
              <ListItemText className={styles.listItemStyle} primary={t(`list.${item.name}`)} />
            </ListItem>
          ))}
        </Box>
        <Box>
          <ListItem button key={"logout"} onClick={() => handleLogoutUser()}>
            <ListItemIcon>
              <ExitToAppRounded className={styles.logoutIcon} />
            </ListItemIcon>
            <ListItemText className={styles.listItemStyle} primary={t("auth.logout")} />
          </ListItem>
        </Box>
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
