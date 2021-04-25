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
      background: `${theme.custom.palette.lightBackground.main}`
    },
    tabsWrapper: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: "auto",
      borderBottomLeftRadius: "25px",
      borderTopLeftRadius: "25px"
    },
    tabStyleTop: {
      border: `1px solid ${theme.palette.secondary.main}`,
      borderBottomLeftRadius: "0px",
      borderTopLeftRadius: "25px",
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);"
    },
    tabStyleTopSelected: {
      border: `1px solid ${theme.landingScreenBackground}`,
      background: `${theme.landingScreenBackground}`,
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);",
      color: "#fff",
      borderBottomLeftRadius: "0px",
      borderTopLeftRadius: "25px"
    },
    tabStyleBottom: {
      border: `1px solid ${theme.palette.secondary.main}`,
      borderBottomLeftRadius: "25px",
      borderTopLeftRadius: "0px",
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);"
    },
    tabStyleBottomSelected: {
      border: `1px solid ${theme.landingScreenBackground}`,
      background: `${theme.landingScreenBackground}`,
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);",
      color: "#fff",
      borderBottomLeftRadius: "25px",
      borderTopLeftRadius: "0px"
    },
    tabStyleCentral: {
      borderTop: `1px solid ${theme.palette.secondary.main}`,
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
      borderRight: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: "2px 2px 10px -5px rgb(0 0 0 / 75%);"
    },
    tabStyleCentralSelected: {
      borderTop: `1px solid ${theme.landingScreenBackground}`,
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
