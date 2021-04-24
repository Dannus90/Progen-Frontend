import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { OtherComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<OtherComponentClasses>;
}

const OtherComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return <div className={styles.otherWrapperStyles}>EDUCATION - NOT IMPLEMENTED</div>;
};

export default OtherComponent;
