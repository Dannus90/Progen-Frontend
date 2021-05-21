import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ResetPasswordComponentClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Typography, TextField, Grid, Link, Button, Container, Paper } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD } from "./gql";
import { Alert } from "@material-ui/lab";
import {
  ResetPasswordWithTokenData,
  ResetPasswordWithTokenDataResponse
} from "./interfaces/reset-password-interfaces";
import { useParams } from "react-router-dom";

interface Props {
  styles: ClassNameMap<ResetPasswordComponentClasses>;
}

interface ResetPasswordChangeData {
  password: string;
}

const initialFormState: ResetPasswordChangeData = {
  password: ""
};

interface DisplayState {
  displaySuccessMessage: boolean;
  displayErrorMessage: boolean;
}

type Params = {
  resetToken: string;
};

const ResetPassword: React.FC<Props> = ({ styles }): JSX.Element => {
  const [formState, setFormState] = useState<ResetPasswordChangeData>(initialFormState);
  const { t } = useTranslation("resetPassword");
  const { resetToken } = useParams<Params>();
  const [displayState, setDisplayState] = useState<DisplayState>({
    displaySuccessMessage: false,
    displayErrorMessage: false
  });

  const [resetPassword, { error, data }] = useMutation<{
    authentication: ResetPasswordWithTokenDataResponse;
    resetPasswordByTokenInput: ResetPasswordWithTokenData;
  }>(RESET_PASSWORD, {
    variables: {
      resetPasswordByTokenInput: {
        password: formState.password,
        token: resetToken ?? ""
      }
    },
    errorPolicy: "all"
  });

  console.log(resetToken);

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPassword();
  };

  useMemo(() => {
    if (data?.authentication.resetPasswordResetByToken.message) {
      setDisplayState((prevState) => ({
        ...prevState,
        displaySuccessMessage: true,
        displayErrorMessage: false
      }));
    }
  }, [data]);

  useMemo(() => {
    if (error) {
      setDisplayState((prevState) => ({
        ...prevState,
        displaySuccessMessage: false,
        displayErrorMessage: true
      }));
    }
  }, [error]);

  const removeDisplayState = () => {
    setDisplayState((prevState) => ({
      ...prevState,
      displaySuccessMessage: false,
      displayErrorMessage: false
    }));
  };

  return (
    <Paper
      elevation={2}
      className={`${styles.resetPasswordPaper}`}
      data-testid="reset-password-page">
      <Container maxWidth="sm" className={`${styles.resetPasswordContainer}`}>
        <Typography component="h1" variant="h6" className={`${styles.headingStyle}`}>
          {t("resetPasswordWithToken.header")}
        </Typography>
        <form noValidate onSubmit={handleResetPassword}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={formState.password}
                id="password"
                onChange={handleFormStateChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("resetPasswordWithToken.newPassword")}
                name="password"
                autoComplete="password"
                size="small"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`${styles.resetPasswordContainerButtonSpacer}`}>
            {t("resetPasswordWithToken.sendRequest")}
          </Button>
          {displayState.displaySuccessMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeDisplayState()}
              severity="success">
              {data?.authentication.resetPasswordResetByToken.message}
            </Alert>
          )}
          {displayState.displayErrorMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeDisplayState()}
              severity="error">
              {error?.graphQLErrors.map(
                (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
              )}
            </Alert>
          )}

          <Grid container justify="flex-end">
            <Grid item>
              <Typography className={`${styles.backToLogin}`}>
                <Link href="/login" variant="body2">
                  {t("resetPasswordWithToken.backToLogin")}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

export default ResetPassword;
