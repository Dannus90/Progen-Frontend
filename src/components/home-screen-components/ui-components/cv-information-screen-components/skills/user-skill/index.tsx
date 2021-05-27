import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import { MainTheme } from "../../../../../../styles/theme";
import UserSkill from "./UserSkill";
import { UserSkillData } from "../interfaces/skill-interfaces";

export type UserSkillComponentClasses = "userSkillWrapperStyles";

interface Props {
  userSkillData: UserSkillData;
}

const UserSkillsComponentWrapper: React.FC<Props> = ({ userSkillData }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const userSkillComponentStyles = makeStyles({
    userSkillWrapperStyles: {
      margin: `${theme.customSpacings.s} 10px 10px 10px`,
      marginTop: theme.customSpacings.xs
    }
  });

  const styles = userSkillComponentStyles();

  return <UserSkill styles={styles} userSkillData={userSkillData} />;
};

export default UserSkillsComponentWrapper;
