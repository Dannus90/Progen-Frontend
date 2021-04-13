import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { CvInformationComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<CvInformationComponentClasses>;
}

const CvInformationComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return <div className={styles.cvInformationWrapperStyles}>Cv Information</div>;
};

export default CvInformationComponent;
