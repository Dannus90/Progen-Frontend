import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import { CvLanguageBasedData } from "../interfaces/cv-print-component-interfaces";
import CvDisplayComponent from "./CvDisplayComponent";
import "./Font.css";

export interface CvDisplayComponentStyles extends Theme {
  cvDisplayComponentWrapperStyles: CreateCSSProperties | CSSProperties;
  imageContactInfoContainer: CreateCSSProperties | CSSProperties;
  sizeAvatar: CreateCSSProperties | CSSProperties;
  contactInformation: CreateCSSProperties | CSSProperties;
  avatarWorkTitleWrapper: CreateCSSProperties | CSSProperties;
  workTitle: CreateCSSProperties | CSSProperties;
  sideInformationWrapper: CreateCSSProperties | CSSProperties;
  name: CreateCSSProperties | CSSProperties;
  fullNameWrapper: CreateCSSProperties | CSSProperties;
  mainContent: CreateCSSProperties | CSSProperties;
}

export type CvDisplayComponentClasses =
  | "cvDisplayComponentWrapperStyles"
  | "sizeAvatar"
  | "contactInformation"
  | "avatarWorkTitleWrapper"
  | "workTitle"
  | "sideInformationWrapper"
  | "name"
  | "fullNameWrapper"
  | "mainContent";

export enum CvTypes {
  English = "English",
  Swedish = "Swedish"
}

interface Props {
  data: CvLanguageBasedData;
}

const CvDisplayComponentWrapper: React.FC<Props> = ({ data }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const cvDisplayComponentWrapperStyles = makeStyles({
    cvDisplayComponentWrapperStyles: {
      background: `#fff`,
      marginTop: theme.customSpacings.s,
      display: "flex",
      flexDirection: "row",
      fontFamily: "Roboto"
    },
    sideInformationWrapper: {
      flex: 1,
      borderRight: theme.custom.borderColors.subtleGreyMedium
    },
    mainContent: {
      flex: 2
    },
    sizeAvatar: {
      height: "200px",
      width: "200px",
      boxShadow: "0px 0px 2px 0px rgb(0 0 0 / 15%)"
    },
    contactInformation: {
      padding: "2rem",
      border: theme.custom.borderColors.subtleGreyFat
    },
    avatarWorkTitleWrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderBottom: theme.custom.borderColors.subtleGreyMain,
      paddingBottom: "1.5rem"
    },
    fullNameWrapper: {
      marginTop: theme.customSpacings.s
    },
    name: {
      fontSize: "2rem",
      textAlign: "center",
      letterSpacing: "0.25rem",
      lineHeight: "2.4rem"
    },
    workTitle: {
      fontSize: "1.2rem",
      textAlign: "center",
      color: theme.custom.palette.textVariantGrey.main
    }
  });

  const styles = cvDisplayComponentWrapperStyles();

  return <CvDisplayComponent styles={styles} data={data} />;
};

export default CvDisplayComponentWrapper;
