import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import { MainTheme } from "../../../../../../styles/theme";
import UserSkill from "./UserSkill";
import { UserSkillData } from "../interfaces/skill-interfaces";

export type UserSkillComponentClasses = "userSkillWrapperStyles" | "alertStyle" | "editIcon";

interface Props {
  userSkillData: UserSkillData;
}

const UserSkillsComponentWrapper: React.FC<Props> = ({ userSkillData }): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const userSkillComponentStyles = makeStyles({
    userSkillWrapperStyles: {
      margin: `${theme.customSpacings.s} 10px 10px 10px`,
      marginTop: theme.customSpacings.xs
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
    editIcon: {
      cursor: "pointer",
      borderRadius: "100px",
      color: "#fff",
      padding: "0.15rem",
      width: "19px",
      height: "19px",
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: theme.palette.primary.main
      },
      "&:active": {
        transform: "scale(0.975) translate(-9.5px, -9.5px)"
      },
      backgroundColor: theme.palette.primary.light,
      transform: "translate(-9.5px, -9.5px)"
    }
  });

  const styles = userSkillComponentStyles();

  return <UserSkill styles={styles} userSkillData={userSkillData} />;
};

export default UserSkillsComponentWrapper;
