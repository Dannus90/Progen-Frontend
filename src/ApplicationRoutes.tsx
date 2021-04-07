import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { routeFactory } from "./RouteFactory";
import LandingScreen from "./screens/landing-screen/index";
import { AuthRoutes } from "./AuthRoutes";
import Layout from "./components/layout/index";

export const ApplicationRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={routeFactory.appRoot()}
          component={() => <LandingScreen componentToDisplay="login" />}
        />
        <Route
          exact
          path={routeFactory.auth.login()}
          component={() => <LandingScreen componentToDisplay="login" />}
        />
        <Route
          exact
          path={routeFactory.auth.register()}
          component={() => <LandingScreen componentToDisplay="register" />}
        />
        <Route
          exact
          path={routeFactory.auth.forgotPassword()}
          component={() => <LandingScreen componentToDisplay="reset-password" />}
        />
        <Layout />
        <AuthRoutes />
      </Switch>
    </Router>
  );
};
