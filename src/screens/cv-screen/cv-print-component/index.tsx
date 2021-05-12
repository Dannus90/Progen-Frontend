import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme";
import CvPrintComponent from "./CvPrintComponent";

export interface CvPrintComponentStyles extends Theme {
  cvPrintComponentWrapperStyles: CreateCSSProperties | CSSProperties;
  cvPaperWrapperStyles: CreateCSSProperties | CSSProperties;
  errorLoaderWrapper: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
}

export type CvPrintComponentClasses =
  | "cvPrintComponentWrapperStyles"
  | "cvPaperWrapperStyles"
  | "errorLoaderWrapper"
  | "alertStyle";

export enum CvTypes {
  English = "English",
  Swedish = "Swedish"
}

interface Props {
  cvVersion: CvTypes;
}

const CvPrintComponentWrapper: React.FC<Props> = ({ cvVersion }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const cvPrintComponentStyles = makeStyles({
    cvPrintComponentWrapperStyles: {
      background: `#fff`
    },
    cvPaperWrapperStyles: {
      width: "100%",
      minHeight: "100vh",
      padding: theme.customSpacings.m
    },
    errorLoaderWrapper: {
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      minHeight: "calc(100vh - 140px)"
    },
    alertStyle: {
      height: "auto",
      padding: "5px 30px",
      minWidth: "400px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.s}`
    }
  });

  const styles = cvPrintComponentStyles();

  return <CvPrintComponent styles={styles} cvVersion={cvVersion} />;
};

export default CvPrintComponentWrapper;
