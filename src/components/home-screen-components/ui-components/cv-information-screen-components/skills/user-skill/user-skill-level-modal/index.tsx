import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../../../../styles/theme";
import { UpdateUserSkillData } from "../UserSkill";
import UserSkillLevelModal from "./UserSkillLevelModal";

interface Props {
  handleClose: () => void;
  open: boolean;
  updateUserSkillData: UpdateUserSkillData;
}

export type UserSkillLevelModalComponentClasses =
  | "userSkillLevelStyles"
  | "exitIcon"
  | "selectContainer"
  | "dialogContent"
  | "updateUserSkillButton"
  | "addIcon"
  | "alertStyle";

const UserSkillLevelModalComponentWrapper: React.FC<Props> = ({
  handleClose,
  open,
  updateUserSkillData
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const userSkillLevelComponentStyles = makeStyles({
    userSkillLevelStyles: {
      margin: "auto",
      minWidth: "400px",
      position: "relative",
      padding: "5rem"
    },
    exitIcon: {
      position: "absolute",
      top: 7.5,
      right: 7.5,
      color: theme.palette.secondary.main,
      cursor: "pointer"
    },
    selectContainer: {
      marginBottom: theme.customSpacings.m,
      width: "100%"
    },
    dialogContent: {
      minWidth: "250px"
    },
    updateUserSkillButton: {
      marginTop: theme.customSpacings.s,
      display: "flex",
      alignItems: "center"
    },
    addIcon: {
      fontSize: "1rem"
    },
    alertStyle: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 10px",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.s}`
    }
  });

  const styles = userSkillLevelComponentStyles();

  return (
    <UserSkillLevelModal
      open={open}
      handleClose={handleClose}
      styles={styles}
      updateUserSkillData={updateUserSkillData}
    />
  );
};

export default UserSkillLevelModalComponentWrapper;
