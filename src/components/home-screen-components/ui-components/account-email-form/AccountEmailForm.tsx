import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountEmailFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import { Button, Card, CardActions, Container, Grid, TextField } from "@material-ui/core";
import { UseAccountForm } from "../../../../custom-hooks/UseAccountForm";

interface Props {
  styles: ClassNameMap<AccountEmailFormComponentClasses>;
}

interface FormState {
  password: string;
  email: string;
}

const initialFormState: FormState = {
  password: "",
  email: ""
};

const AccountEmailFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t, i18n] = useTranslation("account");
  const { formData, handleInputChange, setFormData } = UseAccountForm({ ...initialFormState });

  const handleUpdateEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const clearFormFields = (): void => {
    setFormData({ ...initialFormState });
  };

  return (
    <>
      <Card className={styles.accountEmailFormWrapperStyles}>
        <Container className={styles.headerWrapper}>
          <h4 className={styles.headerStyles}>{t("accountEmailForm.header")}</h4>{" "}
        </Container>
        <form onSubmit={handleUpdateEmail}>
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

export default AccountEmailFormComponent;
