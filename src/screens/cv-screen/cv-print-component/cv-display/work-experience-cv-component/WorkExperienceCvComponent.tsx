import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import { WorkExperienceData } from "../../interfaces/cv-print-component-interfaces";
import { WorkExperienceCvComponentClasses } from ".";
import { transformDate } from "../../../../../utils/dates/date-helper";

interface Props {
  styles: ClassNameMap<WorkExperienceCvComponentClasses>;
  workExperienceData: WorkExperienceData;
  isSwedishCv: boolean;
}

const WorkExperienceCvComponent: React.FC<Props> = ({
  styles,
  workExperienceData,
  isSwedishCv
}): JSX.Element => {
  const citySv = workExperienceData.city;
  const roleSv = workExperienceData.role;
  const descriptionSv = workExperienceData.description;
  const countrySv = workExperienceData.country;

  const resolveDate = (): string => {
    if (workExperienceData.dateEnded === "0001-01-01T00:00:00") {
      return `${transformDate(workExperienceData.dateStarted)} - ${isSwedishCv ? "Nu" : "Now"}`;
    }

    return `${transformDate(workExperienceData.dateStarted)} - ${transformDate(
      workExperienceData.dateEnded
    )}`;
  };

  const resolveEmploymentRateForLanguage = (employmentRate: string) => {
    if (isSwedishCv) {
      if (employmentRate === "FullTime") return "Heltid";
      if (employmentRate === "PartTime") return "Deltid";

      return "Praktik";
    } else {
      console.log(employmentRate === "FullTime");
      if (employmentRate === "FullTime") return "Full time";
      if (employmentRate === "PartTime") return "Part time";

      return "Internship";
    }
  };

  return (
    <div className={styles.workExperienceCvComponentWrapperStyles}>
      <div className={styles.workExperienceContainer}>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.company}>{workExperienceData.companyName}</Typography>
        </div>
        <Typography className={styles.role}>{roleSv}</Typography>
        <Typography className={styles.employmentRate}>
          {resolveEmploymentRateForLanguage(workExperienceData.employmentRate)}
        </Typography>
        <Typography className={styles.date}>{resolveDate()}</Typography>
        <Typography className={styles.cityCountry}>
          {citySv}, {countrySv}
        </Typography>
        <Typography className={styles.description}>{descriptionSv}</Typography>
      </div>
    </div>
  );
};

export default WorkExperienceCvComponent;
