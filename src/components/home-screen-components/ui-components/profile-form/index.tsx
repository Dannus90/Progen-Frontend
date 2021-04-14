import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import ProfileFormComponent from "./ProfileForm";

export interface ProfileFormComponentStyles extends Theme {
  profileFormWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type ProfileFormComponentClasses = "profileFormWrapperStyles";

const ProfileFormComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const profileFormComponentStyles = makeStyles({
    profileFormWrapperStyles: {
      borderRadius: "15px",
      padding: "1.5rem"
    }
  });

  const styles = profileFormComponentStyles();

  return <ProfileFormComponent styles={styles} />;
};

export default ProfileFormComponentWrapper;
