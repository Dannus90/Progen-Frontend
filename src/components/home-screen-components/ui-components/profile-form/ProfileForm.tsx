import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import {
  Card,
  Grid,
  TextField
} from "@material-ui/core";
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
  const { t } = useTranslation();
  const { formData, handleInputChange } = useForm(initialFormState);

  return (
    <>
      <Card className={styles.profileFormWrapperStyles}>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField id="email" aria-describedby="my-helper-text" name="firstName"
                variant="outlined" onChange={handleInputChange} inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }} label={t("form.firstName")} autoFocus
                size="small"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="email" aria-describedby="my-helper-text" />
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};

export default ProfileFormComponent;
