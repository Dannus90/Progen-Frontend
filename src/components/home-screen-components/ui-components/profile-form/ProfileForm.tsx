import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileFormComponentClasses, ProfileFormData } from "./index";
import { useTranslation } from "react-i18next";
import { Button, Card, Container, Grid, TextField } from "@material-ui/core";
import { useForm } from "../../../../custom-hooks/UseForm";
import { InitialFormData } from "./interfaces/profile-form-interfaces";

interface Props {
  styles: ClassNameMap<ProfileFormComponentClasses>;
  loading: boolean;
  profileFormData: ProfileFormData | undefined;
}

const initialFormState: InitialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  countrySv: "",
  citySv: "",
  countryEn: "",
  cityEn: ""
};

const ProfileFormComponent: React.FC<Props> = ({
  styles,
  profileFormData,
  loading
}): JSX.Element => {
  const { t } = useTranslation("home");
  const { formData, handleInputChange } = useForm(initialFormState);

  return (
    <>
      <Card className={styles.profileFormWrapperStyles}>
        <Container className={styles.headerWrapper}>
          <h4 className={styles.headerStyles}>{t("profileForm.profileInformation")}</h4>{" "}
          <span className={styles.headerSpanStyles}>{t("profileForm.profileText")}</span>
        </Container>
        <form>
          <Grid container spacing={3} className={styles.formStyle}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                aria-describedby="my-helper-text"
                name="firstName"
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("profileForm.firstName")}
                autoFocus
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                aria-describedby="my-helper-text"
                name="lastName"
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("profileForm.lastName")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                aria-describedby="my-helper-text"
                name="email"
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("profileForm.email")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phoneNumber"
                aria-describedby="my-helper-text"
                name="phoneNumber"
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("profileForm.phoneNumber")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="countrySv"
                aria-describedby="my-helper-text"
                name="countrySv"
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("profileForm.countrySv")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="citySv"
                aria-describedby="my-helper-text"
                name="citySv"
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("profileForm.citySv")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="countryEn"
                aria-describedby="my-helper-text"
                name="countryEn"
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("profileForm.countryEn")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="cityEn"
                aria-describedby="my-helper-text"
                name="cityEn"
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("profileForm.cityEn")}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Container className={styles.submitButton}>
            <Button type="submit" color="primary" variant="contained">
              {t("profileForm.saveSettings")}
            </Button>
          </Container>
        </form>
      </Card>
    </>
  );
};

export default ProfileFormComponent;
