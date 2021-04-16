import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileComponentClasses } from "./index";
import ProfileCard from "../ui-components/profile-card/index";
import ProfileForm from "../ui-components/profile-form/index";
import { CircularProgress, Container } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_USERDATA } from "./gql";
import { UserInformationResponse } from "./interfaces/profile-interfaces";

interface Props {
  styles: ClassNameMap<ProfileComponentClasses>;
}

const ProfileComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const { loading, error, data } = useQuery<UserInformationResponse>(GET_USERDATA);

  const formData = data?.userData.getFullUserInformation;

  return (
    <div className={styles.profileWrapperStyles}>
      {error && error.graphQLErrors}
      {loading && <CircularProgress />}
      {!loading && !error && (
        <>
          <Container>
            <ProfileCard loading={loading} profileImage={formData?.userData.profileImage} />
          </Container>
          <Container className={styles.profileFormContainer}>
            <ProfileForm loading={loading} formData={formData} />
          </Container>
        </>
      )}
    </div>
  );
};

export default ProfileComponent;
