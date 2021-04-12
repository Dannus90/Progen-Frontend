import React from "react";
import { HomeScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface Props {
  styles: ClassNameMap<HomeScreenClasses>;
}

const HomeScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.pageWrapperStyles}>
      <p>Home Screen!</p>
    </div>
  );
};

export default HomeScreen;
