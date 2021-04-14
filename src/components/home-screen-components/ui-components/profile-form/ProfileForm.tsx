import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import { Card, Grid, TextField } from "@material-ui/core";
import { useForm } from "../../../../custom-hooks/UseForm";
import { ProfileFormData } from "./interfaces/profile-form-interfaces";

interface Props {
  styles: ClassNameMap<ProfileFormComponentClasses>;
}

const initialFormState: ProfileFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  countrySv: "",
  citySv: "",
  countryEn: "",
  cityEn: ""
};

const ProfileFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const { t } = useTranslation("home");
  const { formData, handleInputChange } = useForm(initialFormState);

  return (
    <>
      <Card className={styles.profileFormWrapperStyles}>
        <form>
          <Grid container spacing={3}>
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
                autoFocus
                size="small"
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
                autoFocus
                size="small"
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
                autoFocus
                size="small"
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
                autoFocus
                size="small"
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
                autoFocus
                size="small"
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
                autoFocus
                size="small"
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
                autoFocus
                size="small"
              />
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};

export default ProfileFormComponent;
