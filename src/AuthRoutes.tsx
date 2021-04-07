import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { routeFactory } from "./RouteFactory";
import HomeScreen from "./screens/home-screen/index";

export const AuthRoutes: React.FC = () => {
  return (
    <Router>
      <Route exact path={routeFactory.home.main()} component={() => <HomeScreen />} />
    </Router>
  );
};
