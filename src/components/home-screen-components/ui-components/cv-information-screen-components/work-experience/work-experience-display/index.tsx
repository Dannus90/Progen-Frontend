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
  | "editIcon";

interface Props {
  workExperienceData: GetWorkExperienceResponse;
}

const WorkExperienceComponentWrapper: React.FC<Props> = ({ workExperienceData }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const workExperienceComponentStyles = makeStyles({
    workExperienceDisplayWrapperStyles: {},
    company: {
      fontWeight: "bold",
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

export default WorkExperienceComponentWrapper;
