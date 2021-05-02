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

  const cityEn = educationData.cityEn;
  const countryEn = educationData.countryEn;
  const subjectAreaEn = educationData.subjectAreaEn;
  const descriptionEn = educationData.descriptionEn;

  const resolveDate = (): string => {
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
      <div>
        <Typography className={styles.versionHeader}>
          {t("education.modal.swedishVersion")}
        </Typography>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.education}>{editData.educationName}</Typography>
        </div>
        <Typography className={styles.exam}>{editData.examName}</Typography>
        <Typography className={styles.subject}>{subjectAreaSv}</Typography>
        <Typography className={styles.grade}>{editData.grade}</Typography>
        <Typography className={styles.date}>{resolveDate()}</Typography>
        <Typography className={styles.country}>{countrySv}</Typography>
        <Typography className={styles.city}>{citySv}</Typography>
        <Typography className={styles.description}>{descriptionSv}</Typography>
      </div>
      <div>
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
        <Typography className={styles.education}>{editData.educationName}</Typography>
        <Typography className={styles.exam}>{editData.examName}</Typography>
        <Typography className={styles.subject}>{subjectAreaEn}</Typography>
        <Typography className={styles.grade}>{editData.grade}</Typography>
        <Typography className={styles.date}>{resolveDate()}</Typography>
        <Typography className={styles.country}>{countryEn}</Typography>
        <Typography className={styles.city}>{cityEn}</Typography>
        <Typography className={styles.description}>{descriptionEn}</Typography>
        <EducationModal
          isCreate={false}
          handleClose={handleEditModalClose}
          open={editModalOpen}
          header={t("workExperience.modal.edit")}
          educationData={editData as EditEducationData}
        />
      </div>
    </div>
  );
};

export default EducationDisplayComponent;
