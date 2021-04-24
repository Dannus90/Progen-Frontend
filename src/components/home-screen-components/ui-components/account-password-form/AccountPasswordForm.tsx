import React, { useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountPasswordFormComponentClasses } from "./index";
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
import { useMutation } from "@apollo/client";
import {
  ChangePasswordInput,
  ChangePasswordResponse
} from "./interfaces/change-password-interfaces";
import { CHANGE_PASSWORD } from "./gql";
import { Alert } from "@material-ui/lab";

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
  const [t] = useTranslation("account");
  const [displayAlertMessage, setDisplayAlertMessage] = useState(false);
  const { formData, setFormData, handleInputChange } = UseAccountForm({
    oldPassword: "",
    newPassword: ""
  });
  const [changePassword, { error, loading, data }] = useMutation<{
    authentication: ChangePasswordResponse;
    changePasswordInput: ChangePasswordInput;
  }>(CHANGE_PASSWORD, {
    variables: {
      changePasswordInput: {
        newPassword: formData.newPassword,
        oldPassword: formData.oldPassword
      }
    }
  });

  const clearFormFields = (): void => {
    setFormData({ ...initialFormState });
  };

  const removeAlertDisplay = (): void => {
    setDisplayAlertMessage(false);
  };

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await changePassword();
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
          {displayAlertMessage && data && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeAlertDisplay()}
              severity="success">
              {t("accountPasswordForm.successfulUpdate")}
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
                t("accountPasswordForm.submit")
              )}
            </Button>
            <Button
              size="small"
              className={styles.cardButtonClearStyles}
              variant="contained"
              color="secondary"
              onClick={() => clearFormFields()}>
              {t("accountPasswordForm.clearFields")}
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default AccountPasswordFormComponent;
