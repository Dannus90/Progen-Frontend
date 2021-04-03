import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { routeFactory } from "./RouteFactory";
import Login from "./components/landing-screen-components/login/index";
import Register from "./components/landing-screen-components/register/index";
import ResetPassword from "./components/landing-screen-components/reset-password/index";
import LandingScreen from "./screens/landing-screen/index";

export const ApplicationRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <LandingScreen>
          <Route path={routeFactory.appRoot()} component={Login} />
          <Route path={routeFactory.auth.login()} component={Login} />
          <Route path={routeFactory.auth.register()} component={Register} />
          <Route path={routeFactory.auth.forgotPassword()} component={ResetPassword} />
        </LandingScreen>
      </Switch>
    </Router>
  );
};
