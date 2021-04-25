import React, { useMemo } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AboutMeComponentClasses } from "./index";
import {
  Button,
  CircularProgress,
  Container,
  TextareaAutosize,
  Typography
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { UsePresentationForm } from "../../../../../custom-hooks/UsePresentationForm";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_PRESENTATION, UPDATE_USER_PRESENTATION } from "./gql";
import {
  UpdateUserPresentationInput,
  UserPresentationResponse
} from "./interfaces/about-me-interfaces";

interface Props {
  styles: ClassNameMap<AboutMeComponentClasses>;
}

interface FormState {
  id: string;
  presentationSv: string;
  presentationEn: string;
}

const initialFormState: FormState = {
  id: "",
  presentationSv: "",
  presentationEn: ""
};

const AboutMeComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const { setFormData, formData, handleInputChange } = UsePresentationForm({ ...initialFormState });
  const { error, data } = useQuery<UserPresentationResponse>(GET_USER_PRESENTATION);
  const [
    updateUserPresentation,
    { loading: userPresentationLoading, error: updateError, data: updatedPresentationDataMutation }
  ] = useMutation<{
    userData: UserPresentationResponse;
    updateUserPresentationInput: UpdateUserPresentationInput;
  }>(UPDATE_USER_PRESENTATION);

  const clearSwedishFormFields = (): void => {
    setFormData({ ...formData, presentationSv: "" });
  };

  const clearEnglishFormFields = (): void => {
    setFormData({ ...formData, presentationEn: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    updateUserPresentation({
      variables: {
        updateUserPresentationInput: {
          id: formData.id,
          presentationSv: formData.presentationSv,
          presentationEn: formData.presentationEn
        }
      }
    });
  };

  useMemo(() => {
    const userPresention = data?.userPresentation.getUserPresentation.userPresentation;
    setFormData({
      id: userPresention?.id,
      presentationEn: userPresention?.presentationEn,
      presentationSv: userPresention?.presentationSv
    });
  }, [data]);

  return (
    <div className={styles.aboutMeWrapperStyles}>
      <form className={styles.formStyle} onSubmit={handleSubmit}>
        <Container className={styles.formContainerWrapper}>
          <Container className={styles.aboutMeTextContainer}>
            <Typography className={styles.presentationHeader}>
              {t("aboutMe.presentationSv")}
            </Typography>
            <TextareaAutosize
              className={styles.textAreaStyle}
              value={formData.presentationSv}
              onChange={handleInputChange}
              name="presentationSv"
              aria-label="Presentation sv"
              placeholder={t("aboutMe.presentationSv")}
            />
            <Button
              size="small"
              className={styles.cardButtonClearStyles}
              variant="contained"
              color="secondary"
              onClick={() => clearSwedishFormFields()}>
              {t("aboutMe.clearFields")}
            </Button>
          </Container>
          <Container className={styles.aboutMeTextContainer}>
            <Typography className={styles.presentationHeader}>
              {t("aboutMe.presentationEn")}
            </Typography>
            <TextareaAutosize
              className={styles.textAreaStyle}
              value={formData.presentationEn}
              onChange={handleInputChange}
              name="presentationEn"
              aria-label="Presentation En"
              placeholder={t("aboutMe.presentationEn")}
            />
            <Button
              size="small"
              className={styles.cardButtonClearStyles}
              variant="contained"
              color="secondary"
              onClick={() => clearEnglishFormFields()}>
              {t("aboutMe.clearFields")}
            </Button>
          </Container>
        </Container>
        <Button
          size="small"
          color="primary"
          className={styles.cardButtonSubmitStyles}
          type="submit"
          variant="contained">
          {userPresentationLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            t("aboutMe.submit")
          )}
        </Button>
      </form>
    </div>
  );
};

export default AboutMeComponent;
