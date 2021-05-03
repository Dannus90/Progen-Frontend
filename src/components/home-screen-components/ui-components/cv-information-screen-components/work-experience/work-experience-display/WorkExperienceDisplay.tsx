import React, { useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { WorkExperienceDisplayComponentClasses } from "./index";
import {
  EditWorkExperienceData,
  GetWorkExperienceResponse
} from "../interfaces/work-experience-interfaces";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { transformDate } from "../../../../../../utils/dates/date-helper";
import EditIcon from "@material-ui/icons/Edit";
import WorkExperienceModal from "../work-experience-modal/index";

interface Props {
  styles: ClassNameMap<WorkExperienceDisplayComponentClasses>;
  workExperienceData: GetWorkExperienceResponse;
}

const WorkExperienceDisplayComponent: React.FC<Props> = ({
  styles,
  workExperienceData
}): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const citySv = workExperienceData.citySv;
  const roleSv = workExperienceData.roleSv;
  const descriptionSv = workExperienceData.descriptionSv;
  const countrySv = workExperienceData.countrySv;

  const cityEn = workExperienceData.cityEn;
  const roleEn = workExperienceData.roleEn;
  const descriptionEn = workExperienceData.descriptionEn;
  const countryEn = workExperienceData.countryEn;

  const resolveDate = (): string => {
    return `${transformDate(workExperienceData.dateStarted)} - ${transformDate(
      workExperienceData.dateEnded
    )}`;
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const editData = { ...workExperienceData };
  editData.dateStarted = transformDate(editData.dateStarted);
  editData.dateEnded = transformDate(editData.dateEnded);

  const resolveEmploymentRateForLanguage = (employmentRate: string, language: string) => {
    if (language === "sv") {
      if (employmentRate === "FullTime") return "Heltid";
      if (employmentRate === "PartTime") return "Deltid";

      return "Praktik";
    } else {
      if (employmentRate === "FullTime") return "Full time";
      if (employmentRate === "PartTime") return "Part time";

      return "Internship";
    }
  };

  return (
    <div className={styles.workExperienceDisplayWrapperStyles}>
      <div className={styles.workExperienceContainer}>
        <Typography className={styles.versionHeader}>
          {t("workExperience.modal.swedishVersion")}
        </Typography>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.company}>{workExperienceData.companyName}</Typography>
        </div>
        <Typography className={styles.role}>{roleSv}</Typography>
        <Typography className={styles.employmentRate}>
          {resolveEmploymentRateForLanguage(workExperienceData.employmentRate, "sv")}
        </Typography>
        <Typography className={styles.date}>{resolveDate()}</Typography>
        <Typography className={styles.cityCountry}>
          {citySv}, {countrySv}
        </Typography>
        <Typography className={styles.description}>{descriptionSv}</Typography>
      </div>
      <div className={styles.workExperienceContainer}>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.versionHeader}>
            {t("workExperience.modal.englishVersion")}
          </Typography>
          <EditIcon
            color="action"
            className={styles.editIcon}
            onClick={() => setEditModalOpen(true)}
          />
        </div>
        <Typography className={styles.company}>{workExperienceData.companyName}</Typography>
        <Typography className={styles.role}>{roleEn}</Typography>
        <Typography className={styles.employmentRate}>
          {resolveEmploymentRateForLanguage(workExperienceData.employmentRate, "en")}
        </Typography>
        <Typography className={styles.date}>{resolveDate()}</Typography>
        <Typography className={styles.cityCountry}>
          {cityEn}, {countryEn}
        </Typography>
        <Typography className={styles.description}>{descriptionEn}</Typography>
        <WorkExperienceModal
          isCreate={false}
          handleClose={handleEditModalClose}
          open={editModalOpen}
          header={t("workExperience.modal.edit")}
          workExperience={editData as EditWorkExperienceData}
        />
      </div>
    </div>
  );
};

export default WorkExperienceDisplayComponent;
