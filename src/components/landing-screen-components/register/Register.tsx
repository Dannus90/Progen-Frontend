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
  Checkbox,
  Link,
  Button,
  CircularProgress
} from "@material-ui/core";
import { useForm } from "../../../custom-hooks/UseForm";
import { RegisterData, RegisterFormData, RegisterResponse } from "./interfaces/register-interfaces";
import DraggableModal from "../../common/modals/DraggableModal";
import { useNavigation } from "../../../custom-hooks/UseNavigation";

interface Props {
  styles: ClassNameMap<RegisterComponentClasses>;
}

const initialFormState: RegisterFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const Register: React.FC<Props> = ({ styles }): JSX.Element => {
  const { formData, handleInputChange } = useForm(initialFormState);
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("register");
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [displayAgreementError, setDisplayAgreementError] = useState(false);
  const [registerUser, { error, data }] = useMutation<{
    authentication: RegisterResponse;
    registerUserInput: RegisterData;
  }>(REGISTER_USER, {
    variables: {
      registerUserInput: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      }
    },
    errorPolicy: "all"
  });

  const [modalAgreementOpen, setModalAgreementOpen] = useState(false);
  const [modalPrivacyPolicyOpen, setHandlePrivacyPolicyModalOpen] = useState(false);

  const handleAgreementModalOpen = (): void => {
    setModalAgreementOpen(true);
  };

  const handleAgreementModalClose = (): void => {
    setModalAgreementOpen(false);
  };

  const handlePrivacyPolicyModalOpen = (): void => {
    setHandlePrivacyPolicyModalOpen(true);
  };

  const handlePrivacyPolicyModalClose = (): void => {
    setHandlePrivacyPolicyModalOpen(false);
  };

  const handleAgreementCheckedState = (): void => {
    setAgreementChecked((prev) => !prev);
  };

  const handleRegisterUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Prevent resubmitting.
    if (submitDisabled) {
      return;
    }

    setDisplayAgreementError(false);
    setDisplayErrorMessage(false);
    if (!agreementChecked) {
      setDisplayAgreementError(true);
      return;
    }
    registerUser();
    setSubmitDisabled(true);
    setTimeout(() => {
      setSubmitDisabled(false);
    }, 1500);
  };

  const removeErrorDisplay = (): void => {
    setDisplayErrorMessage(false);
  };

  const removeAgreementErrorDisplay = (): void => {
    setDisplayAgreementError(false);
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
        {displayAgreementError && (
          <Alert
            className={`${styles.alertStyle}`}
            onClose={() => removeAgreementErrorDisplay()}
            severity="error">
            {t("form.missingAgreementCheck")}
          </Alert>
        )}
        <form noValidate onSubmit={(e) => handleRegisterUser(e)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                fullWidth
                id="firstName"
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
                id="lastName"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("form.lastName")}
                name="lastName"
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
                {t("form.termsOfUse1")}{" "}
                <span
                  className={`${styles.agreementButton}`}
                  role="button"
                  tabIndex={-1}
                  onClick={() => handleAgreementModalOpen()}
                  onKeyDown={() => handleAgreementModalOpen()}>
                  {t("form.termsOfUse2")}
                </span>
                {t("form.termsOfUse3")}{" "}
                <span
                  className={`${styles.agreementButton}`}
                  role="button"
                  tabIndex={-1}
                  onClick={() => handlePrivacyPolicyModalOpen()}
                  onKeyDown={() => handlePrivacyPolicyModalOpen()}>
                  {t("form.termsOfUse4")}
                </span>
              </Typography>
            </Container>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`${styles.submitButtonSpacer}`}>
            {data ? (
              <>
                <span className={`${styles.successRegistration}`}>
                  {data?.authentication.registerUser.message}
                </span>
                <CircularProgress size={20} color="inherit" />
              </>
            ) : (
              t("form.signUp")
            )}
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
      <DraggableModal
        header={t("form.modalText.agreementModal.header")}
        p1={t("form.modalText.agreementModal.p1")}
        p2={t("form.modalText.agreementModal.p2")}
        handleClose={handleAgreementModalClose}
        open={modalAgreementOpen}
      />
      <DraggableModal
        header={t("form.modalText.policyModal.header")}
        p1={t("form.modalText.policyModal.p1")}
        p2={t("form.modalText.policyModal.p2")}
        handleClose={handlePrivacyPolicyModalClose}
        open={modalPrivacyPolicyOpen}
      />
    </Paper>
  );
};

export default Register;
