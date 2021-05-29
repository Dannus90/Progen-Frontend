import React, { useMemo } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import { FullUserSkillData } from "../../interfaces/cv-print-component-interfaces";
import { UserSkillsCvComponentClasses } from ".";
import { chain, groupBy } from "lodash";

interface Props {
  styles: ClassNameMap<UserSkillsCvComponentClasses>;
  userSkillsData: Array<FullUserSkillData>;
  isSwedishCv: boolean;
}

type UserSkillsForDisplay = Array<SkillDataForDisplay>;

type SkillDataForDisplay = {
  skillLevel: number;
  skillName: string;
};

type GroupedByLevel = {
  skillName: string;
  skillLevel: string;
};

const resolveSkillLevelToString = (skillLevel: number) => {
  if (skillLevel >= 4) return "Advanced";
  if (skillLevel >= 2 && skillLevel <= 3) return "Medium";

  return "Basic";
};

const groupUserSkills = (data: UserSkillsForDisplay) => {
  const groupedByLevel = data.map((d): GroupedByLevel => {
    return {
      skillName: d.skillName,
      skillLevel: resolveSkillLevelToString(d.skillLevel)
    };
  });

  const groupedData = groupBy(groupedByLevel, "skillLevel");

  return groupedData;
};

const CertificateDisplayComponent: React.FC<Props> = ({
  styles,
  userSkillsData,
  isSwedishCv
}): JSX.Element => {
  const userSkillsForDisplay = useMemo((): UserSkillsForDisplay => {
    return userSkillsData.map((usd) => {
      return {
        skillLevel: usd.userSkill.skillLevel,
        skillName: usd.skill.skillName
      };
    });
  }, [userSkillsData]);

  const groupedSkills = useMemo(() => {
    return groupUserSkills(userSkillsForDisplay);
  }, [userSkillsForDisplay]);

  const advancedSkills = groupedSkills["Advanced"];
  const mediumSkills = groupedSkills["Medium"];
  const basicSkills = groupedSkills["Basic"];

  return (
    <div className={styles.userSkillsCvComponentWrapperStyles}>
      {advancedSkills && advancedSkills.length && (
        <div className={styles.groupedSkillsAndHeadingContainer}>
          <Typography className={styles.skillsHeader}>
            {isSwedishCv ? "Avancerad" : "Advanced"}
          </Typography>
          <div className={styles.groupedSkillsContainer}>
            {advancedSkills.map((as) => (
              <p className={styles.skillAdvanced} key={as.skillName}>
                {as.skillName}
              </p>
            ))}
          </div>
        </div>
      )}
      {mediumSkills && mediumSkills.length && (
        <div className={styles.groupedSkillsAndHeadingContainer}>
          <Typography className={styles.skillsHeader}>
            {isSwedishCv ? "Erfaren" : "Experienced"}
          </Typography>
          <div className={styles.groupedSkillsContainer}>
            {mediumSkills.map((ms) => (
              <p className={styles.skillMedium} key={ms.skillName}>
                {ms.skillName}
              </p>
            ))}
          </div>
        </div>
      )}
      {basicSkills && basicSkills.length && (
        <div className={styles.groupedSkillsAndHeadingContainer}>
          <Typography className={styles.skillsHeader}>
            {isSwedishCv ? "Grundläggande" : "Basic"}
          </Typography>
          <div className={styles.groupedSkillsContainer}>
            {basicSkills.map((bs) => (
              <p className={styles.skillBasic} key={bs.skillName}>
                {bs.skillName}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateDisplayComponent;
