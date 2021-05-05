import { makeStyles, Theme } from "@material-ui/core";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import Other from "./Other";

export interface OtherComponentStyles extends Theme {
  otherWrapperStyles: CreateCSSProperties | CSSProperties;
}

export type OtherComponentClasses = "otherWrapperStyles";

const OtherComponentWrapper: React.FC = (): JSX.Element => {
  const otherComponentStyles = makeStyles({
    otherWrapperStyles: {
      backgroundColor: "red"
    }
  });

  const styles = otherComponentStyles();

  return <Other styles={styles} />;
};

export default OtherComponentWrapper;
