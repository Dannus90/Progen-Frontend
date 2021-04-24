import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import Other from "./Other";

export interface OtherComponentStyles extends Theme {
  otherWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type OtherComponentClasses = "otherWrapperStyles";

const OtherComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const otherComponentStyles = makeStyles({
    otherWrapperStyles: {
      backgroundColor: "red"
    }
  });

  const styles = otherComponentStyles();

  return <Other styles={styles} />;
};

export default OtherComponentWrapper;
