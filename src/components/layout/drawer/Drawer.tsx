import { useMutation, useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ExitToAppRounded, Dashboard, Group, ContactSupportOutlined } from "@material-ui/icons";
import React, { useMemo } from "react";
import { DrawerComponentClasses } from ".";
import { GET_USERDATA, LOGOUT_USER } from "./gql";
import {
  LogoutUserResponseBackend,
  PartialUserInformationResponse
} from "./interfaces/drawer-interfaces";
import { useNavigation } from "../../../custom-hooks/UseNavigation";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/hooks/hooks";

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
  const { loading, error, data } = useQuery<PartialUserInformationResponse>(GET_USERDATA);
  const { userDataState } = useAppSelector((state) => state);

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
      icon: <Dashboard />,
      navigateTo: "/home"
    },
    {
      name: "team",
      icon: <Group />,
      navigateTo: "/your-team"
    }
  ];

  const listIconsLower = [
    {
      name: "support",
      icon: <ContactSupportOutlined />,
      navigateTo: "/support"
    }
  ];

  let fullUsername = `${userDataState.firstName} ${userDataState.lastName}`;

  useMemo((): string => {
    const userData = data?.userData.getFullUserInformation.user;

    if (userData?.firstName || userData?.lastName) {
      return (fullUsername = `${userData?.firstName} ${userData?.lastName}`);
    }

    return (fullUsername = t("drawer.welcome"));
  }, [data]);

  useMemo(() => {
    if (userDataState.firstName || userDataState.lastName) {
      return (fullUsername = `${userDataState.firstName} ${userDataState.lastName}`);
    }

    return (fullUsername = t("drawer.welcome"));
  }, [userDataState]);

  const drawerBody = (
    <>
      <Divider />
      <Avatar className={styles.sizeAvatar} src="./assets/images/SmallProfile.jpg" />
      {loading && (
        <Container className={styles.progressContainer}>
          <CircularProgress size={30} />
        </Container>
      )}
      {!loading && (
        <Typography className={styles.avatarName} variant="h6">
          {error && t("drawer.welcome")}
          {!error && fullUsername}
        </Typography>
      )}

      <Typography className={styles.avatarOccupation}>Software Developer</Typography>
      <Divider />
      <List className={styles.listStyle}>
        <Box>
          {listIconsUpper.map((item) => (
            <Link key={item.name} href={item.navigateTo} underline="none">
              <ListItem button>
                <ListItemIcon className={styles.listItemStyle}>{item.icon}</ListItemIcon>
                <ListItemText className={styles.listItemStyle} primary={t(`list.${item.name}`)} />
              </ListItem>
            </Link>
          ))}
        </Box>
        <Box className={styles.boxDivider}>
          {listIconsLower.map((item) => (
            <Link key={item.name} href={item.navigateTo} underline="none">
              <ListItem button>
                <ListItemIcon className={styles.listItemStyle}>{item.icon}</ListItemIcon>
                <ListItemText className={styles.listItemStyle} primary={t(`list.${item.name}`)} />
              </ListItem>
            </Link>
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
      <Hidden smDown implementation="css">
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
