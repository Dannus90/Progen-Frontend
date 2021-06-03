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
import { ExitToAppRounded } from "@material-ui/icons";
import React, { useCallback, useMemo, useState } from "react";
import { DrawerComponentClasses } from ".";
import { GET_USERDATA, LOGOUT_USER } from "./gql";
import {
  LogoutUserResponseBackend,
  PartialUserInformationResponse
} from "./interfaces/drawer-interfaces";
import { useNavigation } from "../../../custom-hooks/UseNavigation";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { listIconsLower, listIconsUpper } from "./Icons";

interface Props {
  styles: ClassNameMap<DrawerComponentClasses>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window?: any;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

interface UserData {
  profileImage?: string | undefined;
  workTitleSv?: string | undefined;
  workTitleEn?: string | undefined;
}

const DrawerComponent: React.FC<Props> = ({
  styles,
  window,
  handleDrawerToggle,
  mobileOpen
}): JSX.Element => {
  const { navigateTo } = useNavigation();
  const [t, i18n] = useTranslation("common");
  const [logoutUser] = useMutation<LogoutUserResponseBackend>(LOGOUT_USER);
  const { loading, error, data, refetch } = useQuery<PartialUserInformationResponse>(GET_USERDATA);
  const lng = i18n.language;
  const [profileImage, setProfileImage] = useState<string>("");
  const { userDataState } = useAppSelector((state) => state);
  const initialData = data?.userData.getFullUserInformation.user;
  const initialUserData = data?.userData.getFullUserInformation.userData;
  const initialName = `${initialData?.firstName} ${initialData?.lastName}`;
  const initialWorkTitle = `${
    lng === "sv" ? initialUserData?.workTitleSv ?? "" : initialUserData?.workTitleEn ?? ""
  }`;
  const [fullUsername, setFullUsername] = useState<string>(initialName);
  const [workTitle, setWorkTitle] = useState<string>(initialWorkTitle);

  const handleLogoutUser = async () => {
    await logoutUser();
    localStorage.removeItem("tokenData");

    navigateTo("/login");
  };

  const resolveWorkTitle = (data: UserData | undefined) => {
    if (userDataState.workTitleSv && lng === "sv") {
      setWorkTitle(userDataState.workTitleSv);
    } else if (userDataState.workTitleEn && lng === "en") {
      setWorkTitle(userDataState.workTitleEn);
    } else if (data?.workTitleSv && lng === "sv") {
      setWorkTitle(data.workTitleSv);
    } else if (data?.workTitleEn && lng === "en") {
      setWorkTitle(data.workTitleEn);
    } else {
      setWorkTitle("");
    }
  };

  const resolveUserImage = useCallback(
    (data: UserData | undefined) => {
      if (userDataState.profileImage) {
        setProfileImage(userDataState.profileImage);
      } else if (data?.profileImage) {
        setProfileImage(data.profileImage);
      } else {
        setProfileImage("");
      }
    },
    [userDataState, data]
  );

  useMemo(() => {
    refetch();
    const userData = data?.userData.getFullUserInformation.userData;
    const user = data?.userData.getFullUserInformation.user;

    resolveUserImage(userData);
    resolveWorkTitle(userData);

    if (userDataState.firstName || userDataState.lastName) {
      return setFullUsername(`${userDataState.firstName} ${userDataState.lastName}`);
    } else if (user?.firstName || user?.lastName) {
      return setFullUsername(`${user.firstName} ${user.lastName}`);
    }

    return setFullUsername(t("drawer.welcome"));
  }, [userDataState, lng, data]);

  const resolveProfileImage = (): string => {
    return profileImage ? profileImage : "./assets/images/personPlaceholder.png";
  };

  const drawerBody = (
    <>
      <Divider />
      <Avatar className={styles.sizeAvatar} src={resolveProfileImage()} />
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

      <Typography className={styles.avatarOccupation}>{workTitle}</Typography>
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

export default React.memo(DrawerComponent);
