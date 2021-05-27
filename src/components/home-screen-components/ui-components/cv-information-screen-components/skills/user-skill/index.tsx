import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import { MainTheme } from "../../../../../../styles/theme";
import UserSkill from "./UserSkill";

export type UserSkillComponentClasses =
  | "userSkillWrapperStyles";

const UserSkillsComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const userSkillComponentStyles = makeStyles({
    userSkillWrapperStyles: {
      margin: "auto",
      marginTop: theme.customSpacings.l
    }
  });

  const styles = userSkillComponentStyles();

  return <UserSkill styles={styles} />;
};

export default UserSkillsComponentWrapper;
