import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { WorkExperienceComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<WorkExperienceComponentClasses>;
}

const WorkExperienceComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.workExperienceWrapperStyles}>WORK EXPERIENCE - NOT IMPLEMENTED</div>
  );
};

export default WorkExperienceComponent;
