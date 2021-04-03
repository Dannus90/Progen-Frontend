import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
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
  const theme = useTheme<MainTheme>();

  const landingScreenStyles = makeStyles({
    pageWrapperStyles: {
      background: `${theme.landingScreenBackground}`,
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
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

  return (
    <LandingScreen styles={styles}>
      <Suspense fallback={<div>Loading...</div>}>{componentToRender()}</Suspense>
    </LandingScreen>
  );
};

export default LandingScreenWrapper;
