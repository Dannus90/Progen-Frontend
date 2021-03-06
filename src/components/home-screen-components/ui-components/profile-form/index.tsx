import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import { ProfileFormDataState } from "./interfaces/profile-form-interfaces";
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

export interface ProfileFormData {
  user: {
    firstName: string;
    lastName: string;
    lastLogin: Date;
  };
  userData: {
    phoneNumber?: string;
    emailCv?: string;
    citySv?: string;
    cityEn?: string;
    countrySv?: string;
    countryEn?: string;
    addressZipCode?: string;
    profileImage?: string;
    updatedAt: Date;
    createdAt: Date;
  };
}

interface Props {
  onUpdateProfileData: (data: ProfileFormDataState) => void;
}

const ProfileFormComponentWrapper: React.FC<Props> = ({ onUpdateProfileData }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const profileFormComponentStyles = makeStyles({
    profileFormWrapperStyles: {
      borderRadius: "15px",
      width: "100%"
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

  return <ProfileFormComponent styles={styles} onUpdateProfileData={onUpdateProfileData} />;
};

export default ProfileFormComponentWrapper;
