import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../../../styles/theme";
import { WorkExperience } from "../interfaces/work-experience-interfaces";
import WorkExperienceModal from "./WorkExperienceModal";

export interface WorkExperienceModalComponentStyles extends Theme {
  workExperienceWrapperStyles: CreateCSSProperties | CSSProperties;
  closeButtonWrapper: CreateCSSProperties | CSSProperties;
  formStyle: CreateCSSProperties | CSSProperties;
  submitButton: CreateCSSProperties | CSSProperties;
  textAreaStyle: CreateCSSProperties | CSSProperties;
  selectStyle: CreateCSSProperties | CSSProperties;
  leaveEmpty: CreateCSSProperties | CSSProperties;
  alertStyle: CreateCSSProperties | CSSProperties;
  submitButtonWrapper: CreateCSSProperties | CSSProperties;
}

interface Props {
  isCreate: boolean;
  workExperience?: WorkExperience;
  handleClose: () => void;
  open: boolean;
  header: string;
}

export type WorkExperienceModalComponentClasses =
  | "workExperienceModalWrapperStyles"
  | "closeButtonWrapper"
  | "formStyle"
  | "submitButton"
  | "textAreaStyle"
  | "selectStyle"
  | "leaveEmpty"
  | "alertStyle"
  | "submitButtonWrapper";

const WorkExperienceModalComponentWrapper: React.FC<Props> = ({
  isCreate,
  workExperience,
  handleClose,
  open,
  header
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const workExperienceModalComponentStyles = makeStyles({
    workExperienceModalWrapperStyles: {
      margin: "auto",
      minWidth: "400px"
    },
    closeButtonWrapper: {
      display: "flex",
      justifyContent: "flex-end"
    },
    formStyle: {
      padding: "1rem"
    },
    submitButtonWrapper: {
      padding: "1.25rem 1rem"
    },
    submitButton: {
      width: "300px"
    },
    textAreaStyle: {
      minHeight: "300px",
      width: "100%",
      resize: "none",
      marginBottom: theme.customSpacings.s,
      border: "2px solid #cccccc",
      padding: "5px",
      fontFamily: "Tahoma, sans-serif",
      borderRadius: "3px"
    },
    selectStyle: {
      width: "150px"
    },
    leaveEmpty: {
      fontSize: "0.8rem",
      marginLeft: "0.3rem",
      marginTop: "0.2rem",
      color: theme.custom.palette.textVariantGrey.main
    },
    alertStyle: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 10px",
      margin: "0px 16px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.xs}`
    }
  });

  const styles = workExperienceModalComponentStyles();

  return (
    <WorkExperienceModal
      header={header}
      open={open}
      handleClose={handleClose}
      isCreate={isCreate}
      workExperience={workExperience}
      styles={styles}
    />
  );
};

export default WorkExperienceModalComponentWrapper;
