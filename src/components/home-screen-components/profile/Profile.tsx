import React, { useEffect, useMemo } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileComponentClasses } from "./index";
import ProfileCard from "../ui-components/profile-card/index";
import ProfileForm from "../ui-components/profile-form/index";
import { Button, CircularProgress, Container } from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USERDATA, UPDATE_USERDATA } from "./gql";
import { UpdateUserResponse, UserInformationResponse } from "./interfaces/profile-interfaces";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useTranslation } from "react-i18next";
import { ProfileFormDataState } from "../ui-components/profile-form/interfaces/profile-form-interfaces";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { profileClicked } from "../../../redux/reducers/general-reducer/actions";
import { setHasLoaded, setUserData } from "../../../redux/reducers/user-data/actions";

interface Props {
  styles: ClassNameMap<ProfileComponentClasses>;
}

const ProfileComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();
  const { userDataState } = useAppSelector((state) => state);
  const { refetch, loading, error, data } = useQuery<UserInformationResponse>(GET_USERDATA);
  const [
    updateUserData,
    { loading: userDataLoading, error: updateError, data: updatedUserDataMutation }
  ] =
    useMutation<{
      userData: UpdateUserResponse;
      updateUserDataInput: ProfileFormDataState;
    }>(UPDATE_USERDATA);

  useEffect(() => {
    return () => {
      dispatch(profileClicked(false));
    };
  }, []);

  let formData: ProfileFormDataState;

  useMemo(() => {
    const userInformation = data?.userData.getFullUserInformation;
    if (userInformation && !updatedUserDataMutation) {
      formData = {
        firstName: userInformation?.user.firstName ?? "",
        lastName: userInformation?.user.lastName ?? "",
        email: userInformation?.userData.emailCv ?? "",
        phoneNumber: userInformation?.userData.phoneNumber ?? "",
        countrySv: userInformation?.userData.countrySv ?? "",
        citySv: userInformation?.userData.citySv ?? "",
        countryEn: userInformation?.userData.countryEn ?? "",
        cityEn: userInformation?.userData.cityEn ?? "",
        addressZipCode: userInformation.userData.addressZipCode ?? "",
        profileImage: userInformation?.userData.profileImage ?? "",
        publicId: userInformation?.userData.profileImagePublicId ?? "",
        workTitleSv: userInformation?.userData.workTitleSv ?? "",
        workTitleEn: userInformation?.userData.workTitleEn ?? ""
      };

      dispatch(setUserData(formData));
    }
  }, [data]);

  useMemo(() => {
    const userInformation = updatedUserDataMutation?.userData.updateUserData;

    if (userInformation) {
      formData = {
        firstName: userInformation?.firstName ?? "",
        lastName: userInformation?.lastName ?? "",
        email: userInformation?.emailCv ?? "",
        phoneNumber: userInformation?.phoneNumber ?? "",
        countrySv: userInformation?.countrySv ?? "",
        citySv: userInformation?.citySv ?? "",
        countryEn: userInformation?.countryEn ?? "",
        cityEn: userInformation?.cityEn ?? "",
        addressZipCode: userInformation.addressZipCode ?? "",
        profileImage: userInformation.profileImage ?? "",
        publicId: userInformation?.profileImagePublicId ?? "",
        workTitleSv: userInformation?.workTitleSv ?? "",
        workTitleEn: userInformation?.workTitleEn ?? ""
      };

      dispatch(setUserData(formData));
    }
  }, [updatedUserDataMutation]);

  const onUpdateProfileData = (formData: ProfileFormDataState) => {
    updateUserData({
      variables: {
        updateUserDataInput: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          emailCv: formData.email,
          citySv: formData.citySv,
          cityEn: formData.cityEn,
          countryEn: formData.countryEn,
          countrySv: formData.countrySv,
          addressZipCode: formData.addressZipCode,
          workTitleSv: formData.workTitleSv,
          workTitleEn: formData.workTitleEn
        }
      }
    });
  };

  const profileContent = () => {
    if (loading || userDataLoading) {
      return (
        <div className={styles.errorLoaderWrapper}>
          <CircularProgress size={100} />
        </div>
      );
    }

    if ((!loading && error) || updateError) {
      return (
        <div className={styles.errorLoaderWrapper}>
          <Alert
            className={`${styles.alertStyle}`}
            severity="error"
            action={
              <Button color="primary" variant="contained" size="small" onClick={() => refetch()}>
                {t("buttonText.tryAgain")}
              </Button>
            }>
            <AlertTitle>Error</AlertTitle>
            {updateError &&
              updateError?.graphQLErrors.map(
                (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
              )}
            {error &&
              error?.graphQLErrors.map(
                (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
              )}
          </Alert>
        </div>
      );
    }

    return (
      <div className={styles.profileWrapperStyles}>
        <Container>
          <ProfileCard />
        </Container>
        <Container className={styles.profileFormContainer}>
          <ProfileForm onUpdateProfileData={onUpdateProfileData} />
        </Container>
      </div>
    );
  };

  return <>{profileContent()}</>;
};

export default ProfileComponent;
