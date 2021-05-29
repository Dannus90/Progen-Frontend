import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../../styles/theme";
import { FullUserSkillData } from "../../interfaces/cv-print-component-interfaces";
import UserSkillsCvComponent from "./UserSkillsCvComponent";

export type UserSkillsCvComponentClasses =
  | "userSkillsCvComponentWrapperStyles"
  | "groupedSkillsContainer"
  | "groupedSkillsAndHeadingContainer"
  | "skillsHeader"
  | "skillAdvanced"
  | "skillMedium"
  | "skillBasic";

interface Props {
  userSkillsData: Array<FullUserSkillData>;
  isSwedishCv: boolean;
}

// BACK GRADIENT FOR SKILLS:       background: "linear-gradient(to bottom right, #555 0%, #333 100%)",

const UserSkillsCvComponentWrapper: React.FC<Props> = ({
  userSkillsData,
  isSwedishCv
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const userSkillsComponentStyles = makeStyles({
    userSkillsCvComponentWrapperStyles: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      justifyContent: "space-between",
      gap: "10px",
      marginBottom: theme.customSpacings.xs,
      paddingBottom: theme.customSpacings.xs,
      pageBreakInside: "avoid"
    },
    groupedSkillsContainer: {
      padding: "0"
    },
    groupedSkillsAndHeadingContainer: {
      display: "flex",
      flexDirection: "column"
    },
    skillsHeader: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: theme.customSpacings.xxs
    },
    skillAdvanced: {
      borderRadius: "4px",
      padding: "5px 5px 4px",
      color: "#fff",
      fontSize: "14px",
      boxShadow: "0 1px 2px rgb(0 0 0 / 27%)",
      textShadow: "0 2px 2px rgb(0 0 0 / 10%)",
      textTransform: "uppercase",
      fontWeight: "bold",
      background: "linear-gradient(to bottom right, #6a3b3b 0%, #070707 100%)",
      marginBottom: theme.customSpacings.xxs
    },
    skillMedium: {
      borderRadius: "4px",
      padding: "5px 5px 4px",
      color: "#fff",
      fontSize: "14px",
      boxShadow: "0 1px 2px rgb(0 0 0 / 27%)",
      textShadow: "0 2px 2px rgb(0 0 0 / 10%)",
      textTransform: "uppercase",
      fontWeight: "bold",
      background: "linear-gradient(to bottom right, #6a3b3b 0%, #070707 100%)",
      marginBottom: theme.customSpacings.xxs
    },
    skillBasic: {
      borderRadius: "4px",
      padding: "5px 5px 4px",
      color: "#fff",
      fontSize: "14px",
      boxShadow: "0 1px 2px rgb(0 0 0 / 27%)",
      textShadow: "0 2px 2px rgb(0 0 0 / 10%)",
      textTransform: "uppercase",
      fontWeight: "bold",
      background: "linear-gradient(to bottom right, #6a3b3b 0%, #070707 100%)",
      marginBottom: theme.customSpacings.xxs
    }
  });

  const styles = userSkillsComponentStyles();

  return (
    <UserSkillsCvComponent
      isSwedishCv={isSwedishCv}
      userSkillsData={userSkillsData}
      styles={styles}
    />
  );
};

export default UserSkillsCvComponentWrapper;
