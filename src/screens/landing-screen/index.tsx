import { makeStyles, Paper, Theme, CircularProgress, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { useTranslation } from "react-i18next";
import React, { CSSProperties, lazy, Suspense } from "react";
import { MainTheme } from "../../styles/theme";
import LandingScreen from "./LandingScreen";
const Login = lazy(() => import("../../components/landing-screen-components/login/index"));
const Register = lazy(() => import("../../components/landing-screen-components/register/index"));
const ResetPassword = lazy(
  () => import("../../components/landing-screen-components/reset-password/index")
);

export interface LandingScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
}

interface Props {
  componentToDisplay: string;
}

export type LandingScreenClasses = "pageWrapperStyles";

const LandingScreenWrapper: React.FC<Props> = ({ componentToDisplay }): JSX.Element => {
  const { t } = useTranslation("common");
  const theme = useTheme<MainTheme>();

  const landingScreenStyles = makeStyles({
    pageWrapperStyles: {
      background: `${theme.landingScreenBackground}`,
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    fallbackWrapper: {
      width: "50%",
      height: "50%",
      maxWidth: "500px",
      maxHeight: "500px",
      minWidth: "240px",
      minHeight: "240px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    progressSpacer: {
      marginBottom: "1rem"
    }
  });

  const styles = landingScreenStyles();

  const componentToRender = () => {
    switch (componentToDisplay) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "reset-password":
        return <ResetPassword />;
      default:
        return <Login />;
    }
  };

  const fallbackComponent = () => {
    return (
      <Paper className={styles.fallbackWrapper} elevation={2}>
        <CircularProgress size={120} thickness={2.4} className={styles.progressSpacer} />
        <Typography variant="h5">{t("appStates.generalLoading")}</Typography>
      </Paper>
    );
  };

  return (
    <LandingScreen styles={styles}>
      <Suspense fallback={fallbackComponent()}>{componentToRender()}</Suspense>
    </LandingScreen>
  );
};

export default LandingScreenWrapper;
