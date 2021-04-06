import React from "react";
import { LandingScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface Props {
  styles: ClassNameMap<LandingScreenClasses>;
}

const HomeScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.pageWrapperStyles}>
      <p>Home Screen!</p>
    </div>
  );
};

export default HomeScreen;
