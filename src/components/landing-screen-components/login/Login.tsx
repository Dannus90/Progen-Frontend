import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RegisterComponentClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./gql";
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
import { LoginData, LoginResponse } from "./interfaces/login-interfaces";
import { useNavigation } from "../../../custom-hooks/UseNavigation";
import { setTokens } from "../../../utils/auth-helper";

interface Props {
  styles: ClassNameMap<RegisterComponentClasses>;
}

const initialFormState: LoginData = {
  email: "",
  password: ""
};

const Login: React.FC<Props> = ({ styles }): JSX.Element => {
  const { formData, handleInputChange } = useForm(initialFormState);
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("login");
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [loginUser, { error, data }] = useMutation<{
    authentication: LoginResponse;
    loginUserInput: LoginData;
  }>(LOGIN_USER, {
    variables: {
      loginUserInput: {
        email: formData.email,
        password: formData.password
      }
    }
  });

  const handleLoginUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Prevent resubmitting.
    if (loginDisabled) {
      return;
    }

    setDisplayErrorMessage(false);

    loginUser();
    setLoginDisabled(true);
    setTimeout(() => {
      setLoginDisabled(false);
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
      const { accessToken, refreshToken } = data.authentication.loginUser;
      setTokens({ accessToken, refreshToken });
      setTimeout(() => {
        navigateTo("/home");
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
                  {data?.authentication.loginUser && t("form.successfulLogin")}
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
