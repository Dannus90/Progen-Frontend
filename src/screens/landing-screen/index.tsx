import {
  makeStyles,
  Paper,
  Theme,
  CircularProgress,
  Typography,
  Container
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { useTranslation } from "react-i18next";
import React, { CSSProperties, lazy, Suspense } from "react";
import { MainTheme } from "../../styles/theme";
import LandingScreen from "./LandingScreen";
import LanguageIcon from "@material-ui/icons/Language";
const Login = lazy(() => import("../../components/landing-screen-components/login/index"));
const Register = lazy(() => import("../../components/landing-screen-components/register/index"));
const ResetPassword = lazy(
  () => import("../../components/landing-screen-components/reset-password/index")
);
const RequestResetPassword = lazy(
  () => import("../../components/landing-screen-components/request-password-reset/index")
);
import LanguagePicker from "../../components/common/language-picker/index";
import useComponentVisible from "../../custom-hooks/UseComponentVisible";

export interface LandingScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
}

interface Props {
  componentToDisplay: string;
}

export type LandingScreenClasses = "pageWrapperStyles";

const LandingScreenWrapper: React.FC<Props> = ({ componentToDisplay }): JSX.Element => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { t } = useTranslation("common");
  const theme = useTheme<MainTheme>();

  const handleDisplayLanguagePicker = (): void => {
    setIsComponentVisible((prev) => !prev);
  };

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
    },
    languageContainer: {
      width: "100px",
      height: "100px",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      top: "0",
      right: "5px",
      cursor: "pointer"
    },
    languageTypography: {
      color: "#fff"
    }
  });

  const styles = landingScreenStyles();

  const componentToRender = () => {
    switch (componentToDisplay) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "reset-password/:resetToken":
        return <ResetPassword />;
      case "request-reset-password":
        return <RequestResetPassword />;
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
      <Container className={styles.languageContainer} onClick={handleDisplayLanguagePicker}>
        <LanguageIcon color="primary" fontSize="large" />
        <Typography className={styles.languageTypography}>
          {t("languagePicker.language")}
        </Typography>
      </Container>
      <div ref={ref}>{isComponentVisible && <LanguagePicker />}</div>
      <Suspense fallback={fallbackComponent()}>{componentToRender()}</Suspense>
    </LandingScreen>
  );
};

export default LandingScreenWrapper;
