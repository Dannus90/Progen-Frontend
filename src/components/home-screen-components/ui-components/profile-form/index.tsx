import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import ProfileFormComponent from "./ProfileForm";

export interface ProfileFormComponentStyles extends Theme {
  profileFormWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type ProfileFormComponentClasses =
  | "profileFormWrapperStyles"
  | "headerWrapper"
  | "headerStyles"
  | "headerSpanStyles"
  | "formStyle"
  | "submitButton";

const ProfileFormComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const profileFormComponentStyles = makeStyles({
    profileFormWrapperStyles: {
      borderRadius: "15px",
      width: "60%",
      marginRight: "2rem"
    },
    headerWrapper: {
      display: "flex",
      alignItems: "center",
      padding: "1.25rem 1rem",
      borderBottom: theme.custom.borderColors.subtleGreyMain
    },
    headerStyles: {
      color: theme.custom.palette.textVariantDark.medium,
      marginRight: theme.customSpacings.l
    },
    headerSpanStyles: {
      color: theme.custom.palette.listItemStyle.main,
      fontSize: "14px"
    },
    formStyle: {
      padding: "1rem"
    },
    submitButton: {
      borderTop: theme.custom.borderColors.subtleGreyMain,
      padding: "1.25rem 1rem"
    }
  });

  const styles = profileFormComponentStyles();

  return <ProfileFormComponent styles={styles} />;
};

export default ProfileFormComponentWrapper;
