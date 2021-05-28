import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import { MainTheme } from "../../../../../styles/theme";
import Skills from "./Skills";

export type SkillComponentClasses =
  | "skillsWrapperStyles"
  | "addIconStyles"
  | "loaderContainer"
  | "alertStyle"
  | "refetchIcon"
  | "versionHeader"
  | "skillsDataContainer"
  | "languagesHeadingContainer"
  | "languagesHeadingsContainer"
  | "selectContainer"
  | "addNewSkillButton"
  | "addIcon"
  | "skillsContainer"
  | "userSkillsContainer";

const SkillsComponentWrapper: React.FC = (): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const skillsComponentStyles = makeStyles({
    skillsWrapperStyles: {
      margin: "auto",
      marginTop: theme.customSpacings.l
    },
    addIconStyles: {
      cursor: "pointer",
      transform: "translateX(2px)",
      borderRadius: "100px",
      width: "25px",
      height: "25px",
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(238, 238, 238, 1)"
      },
      "&:active": {
        transform: "scale(0.975) translateX(2px)"
      }
    },
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "55vh"
    },
    alertStyle: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 10px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.s}`
    },
    refetchIcon: {
      cursor: "pointer",
      transition: "scale 0.2s ease-in-out, rotate 0.2s ease-in-out",
      "&:active": {
        transform: "scale(0.95) rotate(50deg)"
      }
    },
    versionHeader: {
      fontSize: "1.1em",
      fontWeight: "bold",
      marginBottom: "0.5rem"
    },
    skillsDataContainer: {
      display: "flex",
      flexDirection: "column"
    },
    languagesHeadingContainer: {
      display: "flex",
      width: "50%",
      justifyContent: "space-between"
    },
    languagesHeadingsContainer: {
      display: "flex",
      flexDirection: "row"
    },
    selectContainer: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "300px",
      marginBottom: theme.customSpacings.m
    },
    addNewSkillButton: {
      marginTop: theme.customSpacings.s,
      display: "flex",
      alignItems: "center"
    },
    addIcon: {
      fontSize: "1rem"
    },
    skillsContainer: {
      borderBottom: theme.custom.borderColors.subtleGreyMain
    },
    userSkillsContainer: {
      marginTop: theme.customSpacings.m,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center"
    }
  });

  const styles = skillsComponentStyles();

  return <Skills styles={styles} />;
};

export default SkillsComponentWrapper;
