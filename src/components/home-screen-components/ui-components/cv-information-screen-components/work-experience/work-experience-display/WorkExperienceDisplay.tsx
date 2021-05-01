import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { WorkExperienceDisplayComponentClasses } from "./index";
import { GetWorkExperienceResponse } from "../interfaces/work-experience-interfaces";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { transformDate } from "../../../../../../utils/dates/date-helper";
import EditIcon from "@material-ui/icons/Edit";

interface Props {
  styles: ClassNameMap<WorkExperienceDisplayComponentClasses>;
  workExperienceData: GetWorkExperienceResponse;
}

const WorkExperienceDisplayComponent: React.FC<Props> = ({
  styles,
  workExperienceData
}): JSX.Element => {
  const [t, i18next] = useTranslation("cvInformation");

  const lng = i18next.language === "sv";
  const city = lng ? workExperienceData.citySv : workExperienceData.cityEn;
  const role = lng ? workExperienceData.roleSv : workExperienceData.roleEn;
  const description = lng ? workExperienceData.descriptionSv : workExperienceData.descriptionEn;

  const resolveDate = (): string => {
    return `${transformDate(workExperienceData.dateStarted)} - ${transformDate(
      workExperienceData.dateEnded
    )}`;
  };

  console.log(workExperienceData);

  return (
    <div className={styles.workExperienceDisplayWrapperStyles}>
      <div className={styles.headingIconWrapper}>
        <Typography className={styles.company}>{workExperienceData.companyName}</Typography>
        <EditIcon color="action" className={styles.editIcon} />
      </div>
      <Typography className={styles.role}>{role}</Typography>
      <Typography className={styles.employmentRate}>
        {t(
          `workExperience.workExperienceDisplay.employmentRate.${workExperienceData.employmentRate}`
        )}
      </Typography>
      <Typography className={styles.date}>{resolveDate()}</Typography>
      <Typography className={styles.city}>{city}</Typography>
      <Typography className={styles.description}>{description}</Typography>
    </div>
  );
};

export default WorkExperienceDisplayComponent;
