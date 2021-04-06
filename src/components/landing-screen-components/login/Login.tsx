import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RegisterComponentClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "./gql";
import { Alert } from "@material-ui/lab";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  Link,
  Button,
  CircularProgress
} from "@material-ui/core";
import { useForm } from "../../../custom-hooks/UseForm";
import { RegisterData, RegisterFormData, RegisterResponse } from "./interfaces/login-interfaces";
import { useNavigation } from "../../../custom-hooks/UseNavigation";

interface Props {
  styles: ClassNameMap<RegisterComponentClasses>;
}

const initialFormState: RegisterFormData = {
  firstname: "",
  lastname: "",
  email: "",
  password: ""
};

const Login: React.FC<Props> = ({ styles }): JSX.Element => {
  const { formData, handleInputChange } = useForm(initialFormState);
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("login");
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [registerUser, { error, data }] = useMutation<{
    authentication: RegisterResponse;
    registerUserInput: RegisterData;
  }>(REGISTER_USER, {
    variables: {
      registerUserInput: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password
      }
    },
    errorPolicy: "all"
  });

  const handleLoginUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Prevent resubmitting.
    if (submitDisabled) {
      return;
    }

    setDisplayErrorMessage(false);

    registerUser();
    setSubmitDisabled(true);
    setTimeout(() => {
      setSubmitDisabled(false);
    }, 1500);
  };

  const removeErrorDisplay = (): void => {
    setDisplayErrorMessage(false);
  };

  useEffect(() => {
    setDisplayErrorMessage(true);
  }, [error]);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigateTo("/login");
      }, 1000);
    }
  }, [data]);

  return (
    <Paper elevation={2} className={`${styles.loginPaper}`}>
      <Container maxWidth="sm" className={`${styles.loginContainer}`}>
        <Typography component="h1" variant="h6" className={`${styles.headingStyle}`}>
          {t("form.header")}
        </Typography>
        <p className={`${styles.paragraphStyle}`}>{t("form.createCV")}</p>
        {displayErrorMessage && error && error.graphQLErrors && (
          <Alert
            className={`${styles.alertStyle}`}
            onClose={() => removeErrorDisplay()}
            severity="error">
            {error?.graphQLErrors.map(
              (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
            )}
          </Alert>
        )}
        <form noValidate onSubmit={(e) => handleLoginUser(e)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("form.email")}
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("form.password")}
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`${styles.loginButtonSpacer}`}>
            {data ? (
              <>
                <span className={`${styles.successLogin}`}>
                  {data?.authentication.registerUser.message}
                </span>
                <CircularProgress size={20} color="inherit" />
              </>
            ) : (
              t("form.signIn")
            )}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Typography className={`${styles.noAccountText}`}>
                {t("form.noAccount1")}{" "}
                <Link href="/register" variant="body2">
                  {t("form.noAccount2")}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

export default Login;
