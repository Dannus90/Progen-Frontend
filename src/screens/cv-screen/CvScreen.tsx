import React from "react";
import { CvScreenClasses, CvTypes } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface Props {
  styles: ClassNameMap<CvScreenClasses>;
  cvVersion: CvTypes;
}

const HomeScreen: React.FC<Props> = ({ styles, cvVersion }): JSX.Element => {
  const isSwedishCv = cvVersion === CvTypes.Swedish

  return (
    <div className={styles.cvScreenWrapperStyles}>
      {isSwedishCv ? "SWE" : "EN"}
    </div>
  );
};

export default HomeScreen;
