import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";
import { CvInformationTabsDividerComponentClasses } from ".";

interface Props {
  styles: ClassNameMap<CvInformationTabsDividerComponentClasses>;
}

const CvInformationTabsDividerComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return <div className={styles.CvInformationTabsDividerStyles} />;
};

export default CvInformationTabsDividerComponent;
