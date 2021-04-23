import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountPasswordFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import { Button, Card, CardActions, Container, Grid, TextField } from "@material-ui/core";
import { UseAccountForm } from "../../../../custom-hooks/UseAccountForm";

interface Props {
  styles: ClassNameMap<AccountPasswordFormComponentClasses>;
}

interface FormState {
  newPassword: string;
  oldPassword: string;
}

const initialFormState: FormState = {
  newPassword: "",
  oldPassword: ""
};

const AccountPasswordFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t, i18n] = useTranslation("account");
  const { formData, setFormData, handleInputChange } = UseAccountForm({
    oldPassword: "",
    newPassword: ""
  });

  const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const clearFormFields = (): void => {
    setFormData({ ...initialFormState });
  };

  return (
    <>
      <Card className={styles.accountPasswordFormWrapperStyles}>
        <Container className={styles.headerWrapper}>
          <h4 className={styles.headerStyles}>{t("accountPasswordForm.header")}</h4>
        </Container>
        <form onSubmit={handleUpdatePassword}>
          <Grid container spacing={3} className={styles.formStyle}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="newPassword"
                aria-describedby="my-helper-text"
                name="newPassword"
                value={formData.newPassword}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("accountPasswordForm.newPassword")}
                autoFocus
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="oldPassword"
                aria-describedby="my-helper-text"
                name="oldPassword"
                value={formData.oldPassword}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("accountPasswordForm.oldPassword")}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <CardActions className={styles.cardActionsStyle}>
            <Button
              size="small"
              color="primary"
              className={styles.cardButtonSubmitStyles}
              type="submit"
              variant="contained">
              {t("accountEmailForm.submit")}
            </Button>
            <Button
              size="small"
              className={styles.cardButtonClearStyles}
              variant="contained"
              color="secondary"
              onClick={() => clearFormFields()}>
              {t("accountEmailForm.clearFields")}
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default AccountPasswordFormComponent;