import { makeStyles, Theme, useTheme } from "@material-ui/core";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../styles/theme";
import CvInformationTabsDividerComponent from "./CvInformationTabsDivider";

export interface CvInformationTabsDividerComponentStyles extends Theme {
  CvInformationTabsDividerStyles: CreateCSSProperties | CSSProperties;
}

export type CvInformationTabsDividerComponentClasses = "CvInformationTabsDividerStyles";

const CvInformationTabsDividerComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const cvInformationTabsDividerComponentStyles = makeStyles({
    CvInformationTabsDividerStyles: {
      backgroundColor: `${theme.palette.secondary.main}`,
      minHeight: `calc(100vh / 11)`,
      width: "1px"
    }
  });

  const styles = cvInformationTabsDividerComponentStyles();

  return <CvInformationTabsDividerComponent styles={styles} />;
};

export default CvInformationTabsDividerComponentWrapper;
