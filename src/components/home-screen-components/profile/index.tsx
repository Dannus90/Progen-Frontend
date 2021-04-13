import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme";
import ProfileComponent from "./Profile";

export interface ProfileComponentStyles extends Theme {
  profileComponentStyles: CreateCSSProperties | CSSProperties;
}

export type ProfileComponentClasses = "profileWrapperStyles";

const ProfileComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const profileComponentStyles = makeStyles({
    profileWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
    }
  });

  const styles = profileComponentStyles();

  return <ProfileComponent styles={styles} />;
};

export default ProfileComponentWrapper;
