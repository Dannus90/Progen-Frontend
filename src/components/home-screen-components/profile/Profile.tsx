import React, { useMemo } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileComponentClasses } from "./index";
import ProfileCard from "../ui-components/profile-card/index";
import ProfileForm from "../ui-components/profile-form/index";
import { Button, CircularProgress, Container } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_USERDATA } from "./gql";
import { UserInformationResponse } from "./interfaces/profile-interfaces";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useTranslation } from "react-i18next";

interface Props {
  styles: ClassNameMap<ProfileComponentClasses>;
}

const ProfileComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const { t } = useTranslation("common");
  const { refetch, loading, error, data } = useQuery<UserInformationResponse>(GET_USERDATA);

  const formData = data?.userData.getFullUserInformation;

  const profileContent = () => {
    if (loading) {
      return (
        <div className={styles.errorLoaderWrapper}>
          <CircularProgress size={100} />
        </div>
      );
    }

    if (!loading && error) {
      return (
        <div className={styles.errorLoaderWrapper}>
          <Alert
            className={`${styles.alertStyle}`}
            severity="error"
            action={
              <Button color="primary" variant="contained" size="small" onClick={() => refetch}>
                {t("buttonText.tryAgain")}
              </Button>
            }>
            <AlertTitle>Error</AlertTitle>
            {error?.graphQLErrors.map(
              (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
            )}
          </Alert>
        </div>
      );
    }

    return (
      <div className={styles.profileWrapperStyles}>
        <Container>
          <ProfileCard loading={loading} profileImage={formData?.userData.profileImage} />
        </Container>
        <Container className={styles.profileFormContainer}>
          <ProfileForm loading={loading} formData={formData} />
        </Container>
      </div>
    );
  };

  return <>{profileContent()}</>;
};

export default ProfileComponent;
