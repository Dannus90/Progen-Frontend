import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { UserSkillComponentClasses } from ".";
import { UserSkillData } from "../interfaces/skill-interfaces";
import { Avatar, Chip } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<UserSkillComponentClasses>;
  userSkillData: UserSkillData;
}

const UserSkillComponent: React.FC<Props> = ({ styles, userSkillData }): JSX.Element => {
  const {
    skill: { skillName },
    userSkill: { id, skillLevel, skillId, userId }
  } = userSkillData;

  const handleUserSkillDelete = () => {
    console.log("Hello");
  };

  return (
    <div className={styles.userSkillWrapperStyles}>
      <Chip
        avatar={<Avatar>{skillLevel}</Avatar>}
        label={skillName}
        clickable
        color="secondary"
        onDelete={handleUserSkillDelete}
        variant="outlined"
      />
    </div>
  );
};

export default UserSkillComponent;
