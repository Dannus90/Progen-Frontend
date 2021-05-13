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
  avatarWorkTitleContainer: CreateCSSProperties | CSSProperties;
  workTitle: CreateCSSProperties | CSSProperties;
  sideInformationContainer: CreateCSSProperties | CSSProperties;
  name: CreateCSSProperties | CSSProperties;
  fullNameContainer: CreateCSSProperties | CSSProperties;
  mainContent: CreateCSSProperties | CSSProperties;
  userPresentationContainer: CreateCSSProperties | CSSProperties;
  userPresentationText: CreateCSSProperties | CSSProperties;
  contactInformationContainer: CreateCSSProperties | CSSProperties;
  contactInformationHeader: CreateCSSProperties | CSSProperties;
  phoneNumberContainer: CreateCSSProperties | CSSProperties;
  phoneNumber: CreateCSSProperties | CSSProperties;
  iconStyle: CreateCSSProperties | CSSProperties;
  workExperiencesContainer: CreateCSSProperties | CSSProperties;
  workExperienceEducationHeader: CreateCSSProperties | CSSProperties;
  workExperienceWrapper: CreateCSSProperties | CSSProperties;
  educationsContainer: CreateCSSProperties | CSSProperties;
  playArrowStyle: CreateCSSProperties | CSSProperties;
  otherInformationContainer: CreateCSSProperties | CSSProperties;
  otherInformationHeader: CreateCSSProperties | CSSProperties;
  languagesHeader: CreateCSSProperties | CSSProperties;
  languageList: CreateCSSProperties | CSSProperties;
  languagesContainer: CreateCSSProperties | CSSProperties;
  drivingLicencesHeader: CreateCSSProperties | CSSProperties;
}

export type CvDisplayComponentClasses =
  | "cvDisplayComponentWrapperStyles"
  | "sizeAvatar"
  | "avatarWorkTitleContainer"
  | "workTitle"
  | "sideInformationContainer"
  | "name"
  | "fullNameContainer"
  | "mainContent"
  | "userPresentationContainer"
  | "userPresentationText"
  | "contactInformationContainer"
  | "contactInformationHeader"
  | "iconContactContainer"
  | "contactInfo"
  | "iconStyle"
  | "workExperienceHeader"
  | "educationHeader"
  | "workExperienceWrapper"
  | "educationsContainer"
  | "playArrowStyle"
  | "otherInformationContainer"
  | "otherInformationHeader"
  | "languagesHeader"
  | "languageList"
  | "languagesContainer"
  | "drivingLicencesHeader";

export enum CvTypes {
  English = "English",
  Swedish = "Swedish"
}

interface Props {
  data: CvLanguageBasedData;
  isSwedishCv: boolean;
}

const CvDisplayComponentWrapper: React.FC<Props> = ({ data, isSwedishCv }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const cvDisplayComponentWrapperStyles = makeStyles({
    cvDisplayComponentWrapperStyles: {
      background: `#fff`,
      marginTop: theme.customSpacings.s,
      display: "flex",
      flexDirection: "row",
      fontFamily: "Roboto"
    },
    sideInformationContainer: {
      flex: 1,
      borderRight: theme.custom.borderColors.subtleGreyFat
    },
    mainContent: {
      flex: 2
    },
    sizeAvatar: {
      height: "200px",
      width: "200px",
      boxShadow: "0px 0px 2px 0px rgb(0 0 0 / 15%)"
    },
    avatarWorkTitleContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderBottom: theme.custom.borderColors.subtleGreyFat,
      paddingBottom: theme.customSpacings.l
    },
    fullNameContainer: {
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
      color: theme.custom.palette.textVariantGrey.main,
      marginTop: theme.customSpacings.xxs
    },
    userPresentationContainer: {
      margin: `${theme.customSpacings.l} ${theme.customSpacings.xs}`,
      paddingBottom: theme.customSpacings.l,
      borderBottom: theme.custom.borderColors.subtleGreyMedium
    },
    userPresentationText: {
      color: theme.custom.palette.textVariantGrey.dark
    },
    contactInformationContainer: {
      margin: `${theme.customSpacings.l} ${theme.customSpacings.xs}`
    },
    contactInformationHeader: {
      fontSize: "1.4rem",
      marginBottom: theme.customSpacings.xs
    },
    iconContactContainer: {
      display: "flex",
      marginBottom: theme.customSpacings.xxs
    },
    contactInfo: {
      fontSize: "1rem",
      color: theme.custom.palette.textVariantGrey.dark
    },
    iconStyle: {
      marginRight: theme.customSpacings.xs,
      backgroundColor: theme.custom.palette.textVariantDark.medium,
      color: "#fff",
      borderRadius: "50%",
      padding: "0.2rem"
    },
    workExperienceHeader: {
      fontSize: "1.6rem",
      marginBottom: theme.customSpacings.s,
      display: "flex",
      alignItems: "center"
    },
    educationHeader: {
      fontSize: "1.6rem",
      marginBottom: theme.customSpacings.s,
      display: "flex",
      alignItems: "center"
    },
    languagesHeader: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: theme.customSpacings.xxxs,
      display: "flex",
      alignItems: "center"
    },
    drivingLicencesHeader: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: theme.customSpacings.xxxs,
      display: "flex",
      alignItems: "center"
    },
    otherInformationHeader: {
      fontSize: "1.6rem",
      marginBottom: theme.customSpacings.s,
      display: "flex",
      alignItems: "center"
    },
    workExperienceWrapper: {},
    educationsContainer: {
      marginTop: theme.customSpacings.m,
      pageBreakBefore: "always"
    },
    otherInformationContainer: {
      marginTop: theme.customSpacings.m,
      pageBreakBefore: "always"
    },
    playArrowStyle: {
      color: "#a61e1e",
      marginLeft: "-7.5px"
    },
    languageList: {
      marginLeft: "25px"
    },
    languagesContainer: {
      marginBottom: "1rem"
    }
  });

  const styles = cvDisplayComponentWrapperStyles();

  return <CvDisplayComponent styles={styles} data={data} isSwedishCv={isSwedishCv} />;
};

export default CvDisplayComponentWrapper;
