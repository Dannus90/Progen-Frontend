import React, { useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountEmailFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardActions,
  CircularProgress,
  Container,
  Grid,
  TextField
} from "@material-ui/core";
import { UseAccountForm } from "../../../../custom-hooks/UseAccountForm";
import { CHANGE_EMAIL } from "./gql";
import { ChangeEmailInput, ChangeEmailResponse } from "./interfaces/email-form-interfaces";
import { useMutation } from "@apollo/client";
import { Alert } from "@material-ui/lab";

interface Props {
  styles: ClassNameMap<AccountEmailFormComponentClasses>;
}

interface FormState {
  password: string;
  newEmail: string;
}

const initialFormState: FormState = {
  password: "",
  newEmail: ""
};

const AccountEmailFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("account");
  const { formData, handleInputChange, setFormData } = UseAccountForm({ ...initialFormState });
  const [displayAlertMessage, setDisplayAlertMessage] = useState<boolean>(false);
  const [changeEmail, { error, loading, data }] = useMutation<{
    authentication: ChangeEmailResponse;
    changeEmailInput: ChangeEmailInput;
  }>(CHANGE_EMAIL, {
    variables: {
      changeEmailInput: {
        newEmail: formData.newEmail,
        password: formData.password
      }
    }
  });

  const removeAlertDisplay = (): void => {
    setDisplayAlertMessage(false);
  };

  const clearFormFields = (): void => {
    setFormData({ ...initialFormState });
  };

  const handleUpdateEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await changeEmail();
      setDisplayAlertMessage(true);
      clearFormFields();

      setTimeout(() => {
        setDisplayAlertMessage(false);
      }, 2000);
    } catch (err) {
      setDisplayAlertMessage(true);
      console.error(err.message);
    }
  };

  useEffect(() => {
    setDisplayAlertMessage(true);

    return () => {
      setDisplayAlertMessage(false);
    };
  }, [error]);

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
                id="newEmail"
                aria-describedby="my-helper-text"
                name="newEmail"
                value={formData.newEmail}
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
                type="password"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("accountEmailForm.password")}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          {displayAlertMessage && data && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeAlertDisplay()}
              severity="success">
              {t("accountEmailForm.successfulUpdate")}
            </Alert>
          )}
          {displayAlertMessage && error && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeAlertDisplay()}
              severity="error">
              {error?.graphQLErrors.map(
                (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
              )}
            </Alert>
          )}
          <CardActions className={styles.cardActionsStyle}>
            <Button
              size="small"
              color="primary"
              className={styles.cardButtonSubmitStyles}
              type="submit"
              variant="contained">
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                t("accountEmailForm.submit")
              )}
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
