import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import ProfileCardComponent from "./ProfileCard";

export interface ProfileCardComponentStyles extends Theme {
  profileCardComponentStyles: CreateCSSProperties | CSSProperties;
  profileImageStyle: CreateCSSProperties | CSSProperties;
  cardActionAreaStyle: CreateCSSProperties | CSSProperties;
  profileCardInformation: CreateCSSProperties | CSSProperties;
  cardContentStyle: CreateCSSProperties | CSSProperties;
  cardActionsStyle: CreateCSSProperties | CSSProperties;
  cardButtonStyles: CreateCSSProperties | CSSProperties;
}

export type ProfileCardComponentClasses =
  | "profileCardWrapperStyles"
  | "profileImageStyle"
  | "cardActionAreaStyle"
  | "profileCardInformation"
  | "cardContentStyle"
  | "cardActionsStyle"
  | "cardButtonStyles";

const ProfileCardComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const profileCardComponentStyles = makeStyles({
    profileCardWrapperStyles: {
      width: "385px"
    },
    profileImageStyle: {
      width: "140px",
      borderRadius: "13px"
    },
    cardActionAreaStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "1rem 1rem",
      borderBottom: `${theme.custom.borderColors.subtleGreyMain}`
    },
    profileCardInformation: {
      color: theme.custom.palette.textVariantGrey.light
    },
    cardContentStyle: {
      padding: "0.5rem 1.5rem 0.5rem 0.5rem"
    },
    cardActionsStyle: {
      padding: "1rem"
    },
    cardButtonStyles: {
      width: "50%"
    }
  });

  const styles = profileCardComponentStyles();

  return <ProfileCardComponent styles={styles} />;
};

export default ProfileCardComponentWrapper;
