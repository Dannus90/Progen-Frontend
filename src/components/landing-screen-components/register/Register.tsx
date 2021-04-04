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
        <Typography component="h1" variant="h6">
          {t("form.header")}
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={t("form.firstName")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={t("form.lastName")}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label={t("form.email")}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label={t("form.password")}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={t("form.termsOfUse1")}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                {t("form.alreadyHaveAccount")}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

export default Register;
