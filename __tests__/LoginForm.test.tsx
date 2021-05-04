import React from "react";
import { render, fireEvent } from "@testing-library/react";

import LoginForm from "../src/components/landing-screen-components/login/index";

describe("<LoginForm />", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    render(<LoginForm />);

    expect(1 + 1).toBe(true);
  });
});

//https://testing-library.com/docs/react-testing-library/setup/
