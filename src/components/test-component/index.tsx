import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import { CSSProperties } from "react";
import { MainTheme } from "../../styles/theme";
import TestComponent from "./TestComponent";

export interface TestComponentStyles extends Theme {
  test: CreateCSSProperties | CSSProperties;
  hej: CreateCSSProperties | CSSProperties;
}

export type TestComponentClasses = "test" | "hej";

const TestComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const testComponentStyles = makeStyles({
    test: {
      backgroundColor: `${theme.palette.primary.main}`,
      height: "50px",
      width: "50px"
    },
    hej: {
      color: "red"
    }
  });

  const styles = testComponentStyles();

  return <TestComponent styles={styles} />;
};

export default TestComponentWrapper;
