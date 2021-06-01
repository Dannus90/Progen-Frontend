import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import { EducationData } from "../../interfaces/cv-print-component-interfaces";
import { EducationCvComponentClasses } from ".";
import { transformDate } from "../../../../../utils/dates/date-helper";

interface Props {
  styles: ClassNameMap<EducationCvComponentClasses>;
  educationData: EducationData;
  isSwedishCv: boolean;
  isFirstCvComponent: boolean;
}

const EducationDisplayComponent: React.FC<Props> = ({
  styles,
  educationData,
  isSwedishCv,
  isFirstCvComponent
}): JSX.Element => {
  const city = educationData.city;
  const country = educationData.country;
  const subjectArea = educationData.subjectArea;
  const description = educationData.description;
  const educationName = educationData.educationName;
  const examName = educationData.examName;

  const resolveDate = (): string => {
    if (educationData.dateEnded === "0001-01-01T00:00:00") {
      return `${transformDate(educationData.dateStarted)} - ${isSwedishCv ? "Nu" : "Now"}`;
    }

    return `${transformDate(educationData.dateStarted)} - ${transformDate(
      educationData.dateEnded
    )}`;
  };

  return (
    <div className={styles.educationCvComponentWrapperStyles}>
      {isFirstCvComponent && (
        <Typography className={styles.educationHeader}>
          {isSwedishCv ? "Utbildning".toUpperCase() : "Education".toUpperCase()}
        </Typography>
      )}
      <div className={styles.educationContainer}>
        <div className={styles.headingWrapper}>
          <Typography className={styles.education}>{educationName}</Typography>
        </div>
        <Typography className={styles.exam}>{examName}</Typography>
        <Typography className={styles.subject}>{subjectArea}</Typography>
        {educationData.grade && (
          <Typography className={styles.grade}>
            {isSwedishCv ? "Betyg" : "Grade"}
            {": "}
            {educationData.grade}
          </Typography>
        )}
        <Typography className={styles.date}>{resolveDate()}</Typography>
        <Typography className={styles.location}>
          {country}, {city}
        </Typography>
        <Typography className={styles.description}>{description}</Typography>
      </div>
    </div>
  );
};

export default EducationDisplayComponent;
