import React from "react";
import { CvPrintComponentClasses, CvTypes } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Paper } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<CvPrintComponentClasses>;
  cvVersion: CvTypes;
}

const HomeScreen: React.FC<Props> = ({ styles, cvVersion }): JSX.Element => {
  const isSwedishCv = cvVersion === CvTypes.Swedish;

  return (
    <div className={styles.cvPrintComponentWrapperStyles}>
      <Paper className={styles.cvPaperWrapperStyles}>{isSwedishCv ? "hej" : "hejdå"}</Paper>
    </div>
  );
};

export default HomeScreen;
