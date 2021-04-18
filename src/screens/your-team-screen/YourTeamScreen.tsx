import React from "react";
import { YourTeamScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface Props {
  styles: ClassNameMap<YourTeamScreenClasses>;
}

const YourTeamScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.pageWrapperStyles}>
      <h2>YOUR TEAM SCREEN!</h2>
    </div>
  );
};

export default YourTeamScreen;
