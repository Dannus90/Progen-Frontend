import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { EducationComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<EducationComponentClasses>;
}

const EducationComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return <div className={styles.educationWrapperStyles}>EDUCATION - NOT IMPLEMENTED</div>;
};

export default EducationComponent;
