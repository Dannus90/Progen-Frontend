import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../../styles/theme";
import { GetWorkExperienceResponse } from "../interfaces/work-experience-interfaces";
import WorkExperienceDisplayComponent from "./WorkExperienceDisplay";

export interface WorkExperienceDisplayComponentStyles extends Theme {
  workExperienceDisplayWrapperStyles: CreateCSSProperties | CSSProperties;
  company: CreateCSSProperties | CSSProperties;
  role: CreateCSSProperties | CSSProperties;
  employmentRate: CreateCSSProperties | CSSProperties;
  city: CreateCSSProperties | CSSProperties;
  date: CreateCSSProperties | CSSProperties;
  description: CreateCSSProperties | CSSProperties;
  headingIconWrapper: CreateCSSProperties | CSSProperties;
  editIcon: CreateCSSProperties | CSSProperties;
  versionHeader: CreateCSSProperties | CSSProperties;
  workExperienceContainer: CreateCSSProperties | CSSProperties;
}

export type WorkExperienceDisplayComponentClasses =
  | "workExperienceDisplayWrapperStyles"
  | "company"
  | "role"
  | "employmentRate"
  | "city"
  | "date"
  | "description"
  | "headingIconWrapper"
  | "editIcon"
  | "versionHeader"
  | "workExperienceContainer";

interface Props {
  workExperienceData: GetWorkExperienceResponse;
}

const WorkExperienceDisplayComponentWrapper: React.FC<Props> = ({
  workExperienceData
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const workExperienceComponentStyles = makeStyles({
    workExperienceDisplayWrapperStyles: {
      display: "flex",
      flexDirection: "row",
      borderBottom: theme.custom.borderColors.subtleGreyMain,
      marginBottom: theme.customSpacings.m,
      paddingBottom: theme.customSpacings.xs
    },
    workExperienceContainer: {
      width: "50%"
    },
    versionHeader: {
      fontSize: "1.3em",
      fontWeight: "bold",
      marginBottom: "0.5rem"
    },
    company: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      marginBottom: "0.25rem"
    },
    headingIconWrapper: {
      display: "flex",
      justifyContent: "space-between"
    },
    editIcon: {
      cursor: "pointer",
      borderRadius: "100px",
      width: "25px",
      height: "25px",
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(238, 238, 238, 1)"
      },
      "&:active": {
        transform: "scale(0.975)"
      }
    },
    role: {
      color: theme.custom.palette.textVariantDark.main
    },
    employmentRate: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "0.90rem"
    },
    city: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem",
      marginBottom: "0.5rem"
    },
    date: {
      color: theme.custom.palette.textVariantDark.medium,
      fontSize: "0.85rem"
    },
    description: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "0.95rem",
      marginBottom: "1rem"
    }
  });

  const styles = workExperienceComponentStyles();

  return <WorkExperienceDisplayComponent workExperienceData={workExperienceData} styles={styles} />;
};

export default WorkExperienceDisplayComponentWrapper;
