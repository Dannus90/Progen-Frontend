import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { MainTheme } from "../../../styles/theme";
import { useTranslation } from "react-i18next";
import { RegisterComponentClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
  Button
} from "@material-ui/core";

interface Props {
  styles: ClassNameMap<RegisterComponentClasses>;
}

const Register: React.FC<Props> = ({ styles }): JSX.Element => {
  const { t } = useTranslation("register");
  const theme = useTheme<MainTheme>();

  return (
    <Paper elevation={2} className={`${styles.registerPaper}`}>
      <Container maxWidth="sm" className={`${styles.registerContainer}`}>
        <Typography component="h1" variant="h6" className={`${styles.headingStyle}`}>
          {t("form.header")}
        </Typography>
        <p className={`${styles.paragraphStyle}`}>{t("form.createCV")}</p>
        <form noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
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
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("form.password")}
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
              />
            </Grid>
            <Container className={`${styles.termsAgreementContainer}`}>
              <Checkbox value="allowExtraEmails" color="primary" />
              <Typography className={`${styles.termsAgreementText}`}>
                {t("form.termsOfUse1")} {t("form.termsOfUse2")}
              </Typography>
            </Container>
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
