import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountEmailFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import { Card, Grid, TextField } from "@material-ui/core";
import { UseAccountForm } from "../../../../custom-hooks/UseAccountForm";

interface Props {
  styles: ClassNameMap<AccountEmailFormComponentClasses>;
}

interface FormState {
  password: string;
  email: string;
}

const AccountEmailFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t, i18n] = useTranslation("account");
  const { formData, handleInputChange } = UseAccountForm({
    password: "",
    email: ""
  });

  const updateProfileData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <>
      <Card className={styles.accountEmailFormWrapperStyles}>
        <form onSubmit={updateProfileData}>
          <Grid container spacing={3} className={styles.formStyle}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="email"
                aria-describedby="my-helper-text"
                name="email"
                value={formData.email}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("accountEmailForm.email")}
                autoFocus
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="password"
                aria-describedby="my-helper-text"
                name="password"
                value={formData.password}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("accountEmailForm.password")}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};

export default AccountEmailFormComponent;
