import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RequestResetPasswordComponentClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import {
  Typography,
  TextField,
  Grid,
  Link,
  Button,
  Container,
  Paper,
  CircularProgress
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { REQUEST_RESET_PASSWORD } from "./gql";
import {
  RequestPasswordResetByEmailData,
  RequestPasswordResetByEmailDataResponse
} from "./interfaces/request-password-reset-interfaces";
import { Alert } from "@material-ui/lab";

interface Props {
  styles: ClassNameMap<RequestResetPasswordComponentClasses>;
}

interface RequestPasswordChangeData {
  email: string;
}

const initialFormState: RequestPasswordChangeData = {
  email: ""
};

interface DisplayState {
  displaySuccessMessage: boolean;
  displayErrorMessage: boolean;
}

const RequestResetPassword: React.FC<Props> = ({ styles }): JSX.Element => {
  const [formState, setFormState] = useState<RequestPasswordChangeData>(initialFormState);
  const { t } = useTranslation("resetPassword");
  const [displayState, setDisplayState] = useState<DisplayState>({
    displaySuccessMessage: false,
    displayErrorMessage: false
  });

  const [requestResetPassword, { error, data, loading }] = useMutation<{
    authentication: RequestPasswordResetByEmailDataResponse;
    requestPasswordResetByEmailInput: RequestPasswordResetByEmailData;
  }>(REQUEST_RESET_PASSWORD, {
    variables: {
      requestPasswordResetByEmailInput: {
        email: formState.email
      }
    },
    errorPolicy: "all"
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSendResetPasswordEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestResetPassword();
  };

  useEffect(() => {
    if (data?.authentication.requestPasswordResetByEmail.message) {
      setDisplayState((prevState) => ({
        ...prevState,
        displaySuccessMessage: true,
        displayErrorMessage: false
      }));
    }
  }, [data]);

  useEffect(() => {
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
      className={`${styles.requestResetPasswordPaper}`}
      data-testid="request-page">
      <Container maxWidth="sm" className={`${styles.requestResetPasswordContainer}`}>
        <Typography component="h1" variant="h6" className={`${styles.headingStyle}`}>
          {t("requestPasswordChange.header")}
        </Typography>
        <form noValidate onSubmit={handleSendResetPasswordEmail}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={formState.email}
                id="email"
                onChange={handleFormStateChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("requestPasswordChange.email")}
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`${styles.requestResetPasswordContainerButtonSpacer}`}>
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              t("requestPasswordChange.sendRequest")
            )}
          </Button>
          {displayState.displaySuccessMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeDisplayState()}
              severity="success">
              {data?.authentication.requestPasswordResetByEmail.message}
            </Alert>
          )}
          {displayState.displayErrorMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeDisplayState()}
              severity="error">
              {error?.graphQLErrors.map((err) => `${err.message}`)}
            </Alert>
          )}

          <Grid container justify="flex-end">
            <Grid item>
              <Typography className={`${styles.backToLogin}`}>
                <Link href="/login" variant="body2">
                  {t("requestPasswordChange.backToLogin")}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

export default RequestResetPassword;
