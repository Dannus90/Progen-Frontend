import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { SkillsComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<SkillsComponentClasses>;
}

const SkillsComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return <div className={styles.skillsWrapperStyles}>SKILLS - NOT IMPLEMENTED</div>;
};

export default SkillsComponent;
