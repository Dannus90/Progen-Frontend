import React from "react";
import { SupportScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface Props {
  styles: ClassNameMap<SupportScreenClasses>;
}

const SupportScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.pageWrapperStyles}>
      <h2>SUPPORT SCREEN!</h2>
    </div>
  );
};

export default SupportScreen;
