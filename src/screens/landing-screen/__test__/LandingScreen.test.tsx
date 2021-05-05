import * as React from "react";
import { cleanup, render, RenderResult } from "@testing-library/react";
import LandingScreen from "../index";
import Login from "../../../components/landing-screen-components/login/Login";
import { makeStyles } from "@material-ui/core";

let documentBody: RenderResult;

afterEach(cleanup);

describe("<LandingScreen />", () => {
  beforeEach(() => {
    documentBody = render(<LandingScreen componentToDisplay="login" />);
  });

  it("Wrapper is visible on page", () => {
    expect(documentBody.getByTestId("login-wrapper")).toBeInTheDocument;
  });
});
