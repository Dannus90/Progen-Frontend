import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import TopBar from "./components/layout/topbar/index";
import { routeFactory } from "./RouteFactory";
import HomeScreen from "./screens/home-screen/index";
import Drawer from "./components/layout/drawer/index";

export const AuthRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routeFactory.home.main()} component={() => <HomeScreen />} />
      </Switch>
    </Router>
  );
};
