import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { MainTheme } from "../../styles/theme";
import { LandingScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Container, Paper } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<LandingScreenClasses>;
}

const LandingScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  return <Paper className={styles.pageWrapperStyles} />;
};

export default LandingScreen;
