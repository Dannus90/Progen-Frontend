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
  | "skillBasic"
  | "skillsHeaderMain";

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
      gridTemplateColumns: "1fr",
      justifyContent: "space-between",
      gap: "5px",
      marginBottom: theme.customSpacings.xs,
      paddingBottom: theme.customSpacings.xs,
      pageBreakInside: "avoid"
    },
    groupedSkillsContainer: {
      padding: "0",
      display: "flex"
    },
    groupedSkillsAndHeadingContainer: {
      display: "flex",
      flexDirection: "column"
    },
    skillsHeader: {
      color: theme.custom.palette.textVariantDark.main,
      fontSize: "1.1rem",
      fontWeight: "bold",
      marginBottom: theme.customSpacings.xs
    },
    skillAdvanced: {
      borderRadius: "4px",
      color: theme.custom.palette.textVariantDark.dark,
      fontSize: "14px",
      textShadow: "0 2px 2px rgb(0 0 0 / 10%)",
      textTransform: "uppercase",
      marginRight: theme.customSpacings.s,
      marginBottom: theme.customSpacings.xxs
    },
    skillMedium: {
      borderRadius: "4px",
      color: theme.custom.palette.textVariantDark.dark,
      fontSize: "14px",
      textShadow: "0 2px 2px rgb(0 0 0 / 10%)",
      textTransform: "uppercase",
      marginRight: theme.customSpacings.s,
      marginBottom: theme.customSpacings.xxs
    },
    skillBasic: {
      borderRadius: "4px",
      color: theme.custom.palette.textVariantDark.dark,
      fontSize: "14px",
      textShadow: "0 2px 2px rgb(0 0 0 / 10%)",
      textTransform: "uppercase",
      marginRight: theme.customSpacings.s,
      marginBottom: theme.customSpacings.xxs
    },
    skillsHeaderMain: {
      fontSize: "1.6rem",
      marginBottom: theme.customSpacings.xxs,
      display: "flex",
      alignItems: "center"
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
