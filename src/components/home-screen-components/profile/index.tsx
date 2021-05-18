import { makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../styles/theme";
import ProfileComponent from "./Profile";

export type ProfileComponentClasses =
  | "profileWrapperStyles"
  | "profileFormContainer"
  | "errorLoaderWrapper"
  | "alertStyle";

const ProfileComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();
  const isSmallScreen = useMediaQuery("(max-width: 1330px)");

  const profileComponentStyles = makeStyles({
    profileWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      display: "flex",
      justifyContent: "space-between",
      flexDirection: isSmallScreen ? "column" : "row"
    },
    profileFormContainer: {
      marginRight: "2rem",
      marginTop: isSmallScreen ? "2rem" : "0rem",
      minWidth: "416px"
    },
    errorLoaderWrapper: {
      background: `${theme.custom.palette.lightBackground}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    alertStyle: {
      height: "auto",
      padding: "5px 30px",
      minWidth: "400px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.s}`
    }
  });

  const styles = profileComponentStyles();

  return <ProfileComponent styles={styles} />;
};

export default ProfileComponentWrapper;
