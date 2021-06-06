import React from "react";
import { Route } from "react-router-dom";
import { routeFactory } from "./RouteFactory";
import HomeScreen from "./screens/home-screen/index";
import YourTeamScreen from "./screens/your-team-screen/index";
import SupportScreen from "./screens/support-screen/index";
import CvScreen, { CvTypes } from "./screens/cv-screen/index";
import LandingScreen from "./screens/landing-screen/index";
import NotFoundComponent from "./screens/not-found-screen/index";

export const AuthRoutes: React.FC = () => {
  return (
    <>
      <Route exact path={routeFactory.home.main()} component={() => <HomeScreen />} />
      <Route exact path={routeFactory.yourTeam.main()} component={() => <YourTeamScreen />} />
      <Route exact path={routeFactory.support.main()} component={() => <SupportScreen />} />
      <Route
        exact
        path={routeFactory.cvPrintSv.main()}
        component={() => <CvScreen cvVersion={CvTypes.Swedish} />}
      />
      <Route
        exact
        path={routeFactory.cvPrintEn.main()}
        component={() => <CvScreen cvVersion={CvTypes.English} />}
      />
      <Route
        exact
        path={routeFactory.appRoot()}
        component={() => <LandingScreen componentToDisplay="login" />}
      />
      <Route path="*" exact={true} component={() => <NotFoundComponent />} />
    </>
  );
};
