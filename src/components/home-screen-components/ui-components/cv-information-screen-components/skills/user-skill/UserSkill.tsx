import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { UserSkillComponentClasses } from ".";

interface Props {
  styles: ClassNameMap<UserSkillComponentClasses>;
}

const UserSkillComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.userSkillWrapperStyles}>
      test
    </div>
  );
};

export default UserSkillComponent;