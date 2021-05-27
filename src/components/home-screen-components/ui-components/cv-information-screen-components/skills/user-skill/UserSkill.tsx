import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { UserSkillComponentClasses } from ".";
import { UserSkillData } from "../interfaces/skill-interfaces";

interface Props {
  styles: ClassNameMap<UserSkillComponentClasses>;
  userSkillData: UserSkillData
}

const UserSkillComponent: React.FC<Props> = ({ styles, userSkillData }): JSX.Element => {
  const { skill: { skillName }, userSkill: { id, skillLevel, skillId, userId}} = userSkillData
  
  return <div className={styles.userSkillWrapperStyles}>test</div>;
};

export default UserSkillComponent;
