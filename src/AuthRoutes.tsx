import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { routeFactory } from "./RouteFactory";
import HomeScreen from "./screens/home-screen/index";
import YourTeamScreen from "./screens/your-team-screen/index";
import SupportScreen from "./screens/support-screen/index";

export const AuthRoutes: React.FC = () => {
  return (
    <>
      <Route exact path={routeFactory.home.main()} component={() => <HomeScreen />} />
      <Route exact path={routeFactory.yourTeam.main()} component={() => <YourTeamScreen />} />
      <Route exact path={routeFactory.support.main()} component={() => <SupportScreen />} />
    </>
  );
};
