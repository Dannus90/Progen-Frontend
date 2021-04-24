import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AboutMeComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<AboutMeComponentClasses>;
}

const AccountPasswordFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return <div className={styles.aboutMeWrapperStyles}>ABOUT ME - NOT IMPLEMENTED</div>;
};

export default AccountPasswordFormComponent;
