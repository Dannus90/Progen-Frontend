import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<ProfileComponentClasses>;
}

const ProfileComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.profileWrapperStyles}>
      Profile
    </div>
  );
};

export default ProfileComponent;
