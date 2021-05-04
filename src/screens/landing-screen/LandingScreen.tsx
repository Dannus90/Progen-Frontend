import React from "react";
import { LandingScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface Props {
  styles: ClassNameMap<LandingScreenClasses>;
  children: React.ReactNode;
}

const LandingScreen: React.FC<Props> = ({ styles, children }): JSX.Element => {
  return (
    <div className={styles.pageWrapperStyles} data-testid="login-wrapper">
      {children}
    </div>
  );
};

export default LandingScreen;
