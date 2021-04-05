import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { MainTheme } from "../../../styles/theme";
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
  Checkbox,
  Link,
  Button
} from "@material-ui/core";
import { useForm } from "../../../custom-hooks/UseForm";
import { RegisterData, RegisterFormData, RegisterResponse } from "./interfaces/register-interfaces";

interface Props {
  styles: ClassNameMap<RegisterComponentClasses>;
}

const initialFormState: RegisterFormData = {
  firstname: "",
  lastname: "",
  email: "",
  password: ""
};

const Register: React.FC<Props> = ({ styles }): JSX.Element => {
  const { formData, handleInputChange } = useForm(initialFormState);
  const { t } = useTranslation("register");
  const theme = useTheme<MainTheme>();
  const [agreementChecked, setAgreementChecked] = useState(false);
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

  const handleAgreementCheckedState = (): void => {
    setAgreementChecked((prev) => !prev);
  };

  const handleRegisterUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    registerUser();
  };

  const removeErrorDisplay = () => {
    setDisplayErrorMessage(false);
  };

  useEffect(() => {
    setDisplayErrorMessage(true);
  }, [error]);

  return (
    <Paper elevation={2} className={`${styles.registerPaper}`}>
      <Container maxWidth="sm" className={`${styles.registerContainer}`}>
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
        <form noValidate onSubmit={(e) => handleRegisterUser(e)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                fullWidth
                id="firstname"
                label={t("form.firstName")}
                autoFocus
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("form.lastName")}
                name="lastname"
                autoComplete="lname"
                size="small"
              />
            </Grid>
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
              <p className={`${styles.passwordRules}`}>{t("form.passwordLength")}</p>
            </Grid>
            <Container className={`${styles.termsAgreementContainer}`}>
              <Checkbox
                value="acceptTermsAgreement"
                color="primary"
                onChange={() => handleAgreementCheckedState()}
              />
              <Typography className={`${styles.termsAgreementText}`}>
                {t("form.termsOfUse1")} {t("form.termsOfUse2")}
              </Typography>
            </Container>
            {data && data?.authentication.registerUser.message}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`${styles.submitButtonSpacer}`}>
            {t("form.signUp")}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Typography className={`${styles.termsAgreementText}`}>
                {t("form.alreadyHaveAccount1")}{" "}
                <Link href="/login" variant="body2">
                  {t("form.alreadyHaveAccount2")}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

export default Register;
