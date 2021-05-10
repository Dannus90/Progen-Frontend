import React, { useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { EducationDisplayComponentClasses } from "./index";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { transformDate } from "../../../../../../utils/dates/date-helper";
import EditIcon from "@material-ui/icons/Edit";
import { EditEducationData, GetEducationResponse } from "../interfaces/education-interfaces";
import EducationModal from "../education-modal/index";

interface Props {
  styles: ClassNameMap<EducationDisplayComponentClasses>;
  educationData: GetEducationResponse;
}

const EducationDisplayComponent: React.FC<Props> = ({ styles, educationData }): JSX.Element => {
  const [t, i18n] = useTranslation("cvInformation");
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const citySv = educationData.citySv;
  const countrySv = educationData.countrySv;
  const subjectAreaSv = educationData.subjectAreaSv;
  const descriptionSv = educationData.descriptionSv;
  const educationNameSv = educationData.educationNameSv;
  const examNameSv = educationData.examNameSv;

  const cityEn = educationData.cityEn;
  const countryEn = educationData.countryEn;
  const subjectAreaEn = educationData.subjectAreaEn;
  const descriptionEn = educationData.descriptionEn;
  const educationNameEn = educationData.educationNameEn;
  const examNameEn = educationData.educationNameSv;

  const resolveDate = (): string => {
    if (educationData.dateEnded === "0001-01-01T00:00:00") {
      const lng = i18n.language;

      return `${transformDate(educationData.dateStarted)} - ${lng === "sv" ? "Nu" : "Now"}`;
    }

    return `${transformDate(educationData.dateStarted)} - ${transformDate(
      educationData.dateEnded
    )}`;
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const editData = { ...educationData };
  editData.dateStarted = transformDate(editData.dateStarted);
  editData.dateEnded = transformDate(editData.dateEnded);

  return (
    <div className={styles.educationDisplayWrapperStyles}>
      <div className={styles.educationContainer}>
        <Typography className={styles.versionHeader}>
          {t("education.modal.swedishVersion")}
        </Typography>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.education}>{educationNameSv}</Typography>
        </div>
        <Typography className={styles.exam}>{examNameSv}</Typography>
        <Typography className={styles.subject}>{subjectAreaSv}</Typography>
        {editData.grade && (
          <Typography className={styles.grade}>
            {"Betyg"}
            {": "}
            {editData.grade}
          </Typography>
        )}
        <Typography className={styles.date}>{resolveDate()}</Typography>
        <Typography className={styles.location}>
          {countrySv}, {citySv}
        </Typography>
        <Typography className={styles.description}>{descriptionSv}</Typography>
      </div>
      <div className={styles.educationContainer}>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.versionHeader}>
            {t("education.modal.englishVersion")}
          </Typography>
          <EditIcon
            color="action"
            className={styles.editIcon}
            onClick={() => setEditModalOpen(true)}
          />
        </div>
        <Typography className={styles.education}>{educationNameEn}</Typography>
        <Typography className={styles.exam}>{examNameEn}</Typography>
        <Typography className={styles.subject}>{subjectAreaEn}</Typography>
        {editData.grade && (
          <Typography className={styles.grade}>
            {"Grade"}
            {": "}
            {editData.grade}
          </Typography>
        )}
        <Typography className={styles.date}>{resolveDate()}</Typography>
        <Typography className={styles.location}>
          {countryEn}, {cityEn}
        </Typography>
        <Typography className={styles.description}>{descriptionEn}</Typography>
        <EducationModal
          isCreate={false}
          handleClose={handleEditModalClose}
          open={editModalOpen}
          header={t("education.modal.edit")}
          educationData={editData as EditEducationData}
        />
      </div>
    </div>
  );
};

export default EducationDisplayComponent;
