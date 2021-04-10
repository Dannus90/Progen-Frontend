import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../styles/theme";
import TestScreen from "./ExampleScreen";

export interface ExampleScreenStyles extends Theme {
  pageWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type ExampleScreenClasses = "pageWrapperStyles";

const ExampleScreenWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const exampleScreenStyles = makeStyles({
    pageWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`,
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });

  const styles = exampleScreenStyles();

  return <TestScreen styles={styles} />;
};

export default ExampleScreenWrapper;
