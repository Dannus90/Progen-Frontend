import React from "react";
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

  const clearSwedishFormFields = (): void => {
    setFormData({ ...formData, presentationSv: "" });
  };

  const clearEnglishFormFields = (): void => {
    setFormData({ ...formData, presentationEn: "" });
  };

  return (
    <div className={styles.aboutMeWrapperStyles}>
      <form>
        <Container className={styles.aboutMeTextContainer}>
          <Typography>{t("aboutMe.presentationSv")}</Typography>
          <TextareaAutosize
            rowsMin={10}
            aria-label="empty textarea"
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
          <Typography>{t("aboutMe.presentationEn")}</Typography>
          <TextareaAutosize
            rowsMin={10}
            aria-label="empty textarea"
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
        <Button
          size="small"
          color="primary"
          className={styles.cardButtonSubmitStyles}
          type="submit"
          variant="contained">
          {/*           {loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            t("accountPasswordForm.submit")
          )} */}
          {t("aboutMe.submit")}
        </Button>
      </form>
    </div>
  );
};

export default AboutMeComponent;
