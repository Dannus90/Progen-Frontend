import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import LandingScreen from "../index";

let documentBody: RenderResult;

describe("<LandingScreen />", () => {
  beforeEach(() => {
    documentBody = render(<LandingScreen componentToDisplay="login" />);
  });

  it("Wrapper is visible on page", () => {
    expect(documentBody.getByTestId("login-wrapper")).toBeInTheDocument;
  });
});
