import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../styles/theme";
import CvInformation from "./CvInformation";

export interface CvInforrmationComponentStyles extends Theme {
  cvInformationComponentStyles: CreateCSSProperties | CSSProperties;
  tabStyleTop: CreateCSSProperties | CSSProperties;
  tabStyleBottom: CreateCSSProperties | CSSProperties;
  tabStyleCentral: CreateCSSProperties | CSSProperties;
  tabStyleCentralSelected: CreateCSSProperties | CSSProperties;
  tabsWrapper: CreateCSSProperties | CSSProperties;
  tabsDividerWrapper: CreateCSSProperties | CSSProperties;
  tabStyleTopSelected: CreateCSSProperties | CSSProperties;
  tabStyleBottomSelected: CreateCSSProperties | CSSProperties;
}

export type CvInformationComponentClasses =
  | "cvInformationWrapperStyles"
  | "tabStyleTop"
  | "tabStyleBottom"
  | "tabStyleCentralSelected"
  | "tabStyleBottomSelected"
  | "tabStyleTopSelected"
  | "tabStyleCentral"
  | "tabsWrapper"
  | "tabsDividerWrapper";

const CvInformationComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const createCvInformationComponentStyles = makeStyles({
    cvInformationWrapperStyles: {
      background: `${theme.custom.palette.lightBackground.main}`,
      minWidth: "800px"
    },
    tabsWrapper: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: "auto",
      padding: "1rem"
    },
    tabStyleTop: {
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: "100px",
      width: "90%",
      margin: "auto",
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);"
    },
    tabStyleTopSelected: {
      border: `1px solid ${theme.landingScreenBackground}`,
      borderRadius: "100px",
      width: "90%",
      margin: "auto",
      background: `${theme.landingScreenBackground}`,
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);",
      color: "#fff"
    },
    tabStyleBottom: {
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: "100px",
      width: "90%",
      margin: "auto",
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);"
    },
    tabStyleBottomSelected: {
      border: `1px solid ${theme.landingScreenBackground}`,
      borderRadius: "100px",
      width: "90%",
      margin: "auto",
      background: `${theme.landingScreenBackground}`,
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);",
      color: "#fff"
    },
    tabStyleCentral: {
      border: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);",
      borderRadius: "100px",
      width: "90%",
      margin: "auto"
    },
    tabStyleCentralSelected: {
      borderTop: `1px solid ${theme.landingScreenBackground}`,
      borderRadius: "100px",
      width: "90%",
      margin: "auto",
      borderBottom: `1px solid ${theme.landingScreenBackground}`,
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);",
      background: `${theme.landingScreenBackground}`,
      color: "#fff"
    },
    tabsDividerWrapper: {
      display: "flex",
      justifyContent: "center",
      width: "100%"
    }
  });

  const styles = createCvInformationComponentStyles();

  return <CvInformation styles={styles} />;
};

export default CvInformationComponentWrapper;
