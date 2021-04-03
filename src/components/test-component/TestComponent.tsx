import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { MainTheme } from "../../styles/theme";
import { TestComponentClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface Props {
  styles: ClassNameMap<TestComponentClasses>;
}

const TestComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  return (
    <div>
      <h2 style={{ color: `${theme.palette.secondary.main}` }}>Testar</h2>
      <div className={`${styles.test}`} />
    </div>
  );
};

export default TestComponent;
