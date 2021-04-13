import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme";
import CvInformation from "./CvInformation";

export interface CvInforrmationComponentStyles extends Theme {
  cvInformationComponentStyles: CreateCSSProperties | CSSProperties;
}

export type CvInformationComponentClasses = "cvInformationWrapperStyles";

const CvInformationComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const createCvInformationComponentStyles = makeStyles({
    cvInformationWrapperStyles: {
      background: `${theme.custom.palette.lightBackground}`
    }
  });

  const styles = createCvInformationComponentStyles();

  return <CvInformation styles={styles} />;
};

export default CvInformationComponentWrapper;
