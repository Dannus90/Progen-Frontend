import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileComponentClasses } from "./index";
import ProfileCard from "../ui-components/profile-card/index";
import ProfileForm from "../ui-components/profile-form/index";
import { Container } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<ProfileComponentClasses>;
}

const ProfileComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.profileWrapperStyles}>
      <Container>
        <ProfileCard />
      </Container>
      <Container className={styles.profileFormContainer}>
        <ProfileForm />
      </Container>
    </div>
  );
};

export default ProfileComponent;
